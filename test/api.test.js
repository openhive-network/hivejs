require('babel-polyfill');
import assert from 'assert';
import should from 'should';
import testPost from './test-post.json';
import hivejs from '../src';
import api from '../src/api';

describe('hivejs.api:', function () {
  this.timeout(30 * 1000);

  describe('setOptions', () => {
    it('works', () => {
      let url = hivejs.config.get('uri');
      if(! url) url = hivejs.config.get('websocket');
      hivejs.api.setOptions({ url: url, useAppbaseApi: true });
    });
  });

  describe('getFollowers', () => {
    describe('getting ned\'s followers', () => {
      it('works', async () => {
        const result = await hivejs.api.getFollowersAsync('ned', 0, 'blog', 5);
        assert(result, 'getFollowersAsync resoved to null?');
        result.should.have.lengthOf(5);
      });

      it('the startFollower parameter has an impact on the result', async () => {
        // Get the first 5
        const result1 = await hivejs.api.getFollowersAsync('ned', 0, 'blog', 5)
          result1.should.have.lengthOf(5);
        const result2 = await hivejs.api.getFollowersAsync('ned', result1[result1.length - 1].follower, 'blog', 5)
          result2.should.have.lengthOf(5);
        result1.should.not.be.eql(result2);
      });

      it('clears listeners', async () => {
        hivejs.api.listeners('message').should.have.lengthOf(0);
      });
    });
  });

  describe('getContent', () => {
    describe('getting a random post', () => {
      it('works', async () => {
        const result = await hivejs.api.getContentAsync('yamadapc', 'test-1-2-3-4-5-6-7-9');
        result.should.have.properties(testPost);
      });

      it('clears listeners', async () => {
        hivejs.api.listeners('message').should.have.lengthOf(0);
      });
    });
  });

  describe('streamBlockNumber', () => {
    it('streams hive transactions', (done) => {
      let i = 0;
      const release = hivejs.api.streamBlockNumber((err, block) => {
        should.exist(block);
        block.should.be.instanceOf(Number);
        i++;
        if (i === 2) {
          release();
          done();
        }
      });
    });
  });

  describe('streamBlock', () => {
    it('streams hive blocks', (done) => {
      let i = 0;
      const release = hivejs.api.streamBlock((err, block) => {
        try {
          should.exist(block);
          block.should.have.properties([
            'previous',
            'transactions',
            'timestamp',
          ]);
        } catch (err2) {
          release();
          done(err2);
          return;
        }

        i++;
        if (i === 2) {
          release();
          done();
        }
      });
    });
  });

  describe('streamTransactions', () => {
    it('streams hive transactions', (done) => {
      let i = 0;
      const release = hivejs.api.streamTransactions((err, transaction) => {
        try {
          should.exist(transaction);
          transaction.should.have.properties([
            'ref_block_num',
            'operations',
            'extensions',
          ]);
        } catch (err2) {
          release();
          done(err2);
          return;
        }

        i++;
        if (i === 2) {
          release();
          done();
        }
      });
    });
  });

  describe('streamOperations', () => {
    it('streams hive operations', (done) => {
      let i = 0;
      const release = hivejs.api.streamOperations((err, operation) => {
        try {
          should.exist(operation);
        } catch (err2) {
          release();
          done(err2);
          return;
        }

        i++;
        if (i === 2) {
          release();
          done();
        }
      });
    });
  });

  describe('useApiOptions', () => {
    it('works ok with the prod instances', async() => {
      hivejs.api.setOptions({ useAppbaseApi: true, url: hivejs.config.get('uri') });

      const result = await hivejs.api.getContentAsync('yamadapc', 'test-1-2-3-4-5-6-7-9');
      hivejs.api.setOptions({ useAppbaseApi: false, url: hivejs.config.get('uri') });

      result.should.have.properties(testPost);
    });
  });

  describe('with retry', () => {
    let hivejsApi;
    beforeEach(() => {
      hivejsApi = new api.Hivejs({});
    });

    it('works by default', async function() {
      let attempts = 0;
      hivejsApi.setOptions({
        url: 'https://api.hive.blog',
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          const data = JSON.parse(req.body);
          res({
            ok: true,
            json: () => Promise.resolve({
              jsonrpc: '2.0',
              id: data.id,
              result: ['ned'],
            }),
          });
          attempts++;
        }),
      });
      const result = await hivejsApi.getFollowersAsync('ned', 0, 'blog', 5)
      assert.equal(attempts, 1);
      assert.deepEqual(result, ['ned']);
    });

    it('does not retry by default', async() => {
      let attempts = 0;
      hivejsApi.setOptions({
        url: 'https://api.hive.blog',
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          rej(new Error('Bad request'));
          attempts++;
        }),
      });

      let result;
      let errored = false;
      try {
        result = await hivejsApi.getFollowersAsync('ned', 0, 'blog', 5)
      } catch (e) {
        errored = true;
      }
      assert.equal(attempts, 1);
      assert.equal(errored, true);
    });

    it('works with retry passed as a boolean', async() => {
      let attempts = 0;
      hivejsApi.setOptions({
        url: 'https://api.hive.blog',
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          const data = JSON.parse(req.body);
          res({
            ok: true,
            json: () => Promise.resolve({
              jsonrpc: '2.0',
              id: data.id,
              result: ['ned'],
            }),
          });
          attempts++;
        }),
      });

      const result = await hivejsApi.getFollowersAsync('ned', 0, 'blog', 5)
      assert.equal(attempts, 1);
      assert.deepEqual(result, ['ned']);
    });

    it('retries with retry passed as a boolean', async() => {
      let attempts = 0;
      hivejsApi.setOptions({
        url: 'https://api.hive.blog',
        retry: true,
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          if (attempts < 1) {
            rej(new Error('Bad request'));
          } else {
            const data = JSON.parse(req.body);
            res({
              ok: true,
              json: () => Promise.resolve({
                jsonrpc: '2.0',
                id: data.id,
                result: ['ned'],
              }),
            });
          }
          attempts++;
        }),
      });

      let result;
      let errored = false;
      try {
        result = await hivejsApi.getFollowersAsync('ned', 0, 'blog', 5);
      } catch (e) {
        errored = true;
      }
      assert.equal(attempts, 2);
      assert.equal(errored, false);
      assert.deepEqual(result, ['ned']);
    });

    it('works with retry passed as an object', async() => {
      hivejsApi.setOptions({
        url: 'https://api.hive.blog',
        retry: {
          retries: 3,
          minTimeout: 1, // 1ms
        },
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          const data = JSON.parse(req.body);
          res({
            ok: 'true',
            json: () => Promise.resolve({
              jsonrpc: '2.0',
              id: data.id,
              result: ['ned'],
            }),
          });
        }),
      });

      const result = await hivejsApi.getFollowersAsync('ned', 0, 'blog', 5);
      assert.deepEqual(result, ['ned']);
    });

    it('retries with retry passed as an object', async() => {
      let attempts = 0;
      hivejsApi.setOptions({
        url: 'https://api.hive.blog',
        retry: {
          retries: 3,
          minTimeout: 1,
        },
        fetchMethod: (uri, req) => new Promise((res, rej) => {
          if (attempts < 1) {
            rej(new Error('Bad request'));
          } else {
            const data = JSON.parse(req.body);
            res({
              ok: true,
              json: () => Promise.resolve({
                jsonrpc: '2.0',
                id: data.id,
                result: ['ned'],
              }),
            });
          }
          attempts++;
        }),
      });

      let result;
      let errored = false;
      try {
        result = await hivejsApi.getFollowersAsync('ned', 0, 'blog', 5);
      } catch (e) {
        errored = true;
      }
      assert.equal(attempts, 2);
      assert.equal(errored, false);
      assert.deepEqual(result, ['ned']);
    });

    it('does not retry non-retriable operations');
  });

});
