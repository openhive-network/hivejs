import Promise from 'bluebird';
import should from 'should';
import hivejs from '../src';

const username = process.env.HIVE_USERNAME || 'guest123';
const password = process.env.HIVE_PASSWORD;
const postingWif = password
  ? hivejs.auth.toWif(username, password, 'posting')
  : '5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg';

describe('hivejs.broadcast:', () => {
  it('exists', () => {
    should.exist(hivejs.broadcast);
  });

  it('has generated methods', () => {
    should.exist(hivejs.broadcast.vote);
    should.exist(hivejs.broadcast.voteWith);
    should.exist(hivejs.broadcast.comment);
    should.exist(hivejs.broadcast.transfer);
  });

  it('has backing methods', () => {
    should.exist(hivejs.broadcast.send);
  });

  it('has promise methods', () => {
    should.exist(hivejs.broadcast.sendAsync);
    should.exist(hivejs.broadcast.voteAsync);
    should.exist(hivejs.broadcast.transferAsync);
  });

  describe('patching transaction with default global properties', () => {
    it('works', async () => {
      const tx = await hivejs.broadcast._prepareTransaction({
        extensions: [],
        operations: [['vote', {
          voter: 'yamadapc',
          author: 'yamadapc',
          permlink: 'test-1-2-3-4-5-6-7-9',
        }]],
      });

      tx.should.have.properties([
        'expiration',
        'ref_block_num',
        'ref_block_prefix',
        'extensions',
        'operations',
      ]);
    });
  });

  describe('no blocks on chain', () => {
    it('works', async () => {
      const newAccountName = username + '-' + Math.floor(Math.random() * 10000);
      const keys = hivejs.auth.generateKeys(
        username, password, ['posting', 'active', 'owner', 'memo']);

      const oldGetDynamicGlobalProperties = hivejs.api.getDynamicGlobalPropertiesAsync;
      hivejs.api.getDynamicGlobalPropertiesAsync = () => Promise.resolve({
        time: '2019-04-14T21:30:56',
        last_irreversible_block_num: 32047459,
      });

      // If the block returned is `null`, then no blocks are on the chain yet.
      const oldGetBlockAsync = hivejs.api.getBlockAsync;
      hivejs.api.getBlockAsync = () => Promise.resolve(null);

      try {
        const tx = await hivejs.broadcast._prepareTransaction({
          extensions: [],
          operations: [[
            'account_create',
            {
              fee: '0.000 HIVE',
              creator: username,
              new_account_name: newAccountName,
              owner: {
                weight_threshold: 1,
                account_auths: [],
                key_auths: [[keys.owner, 1]],
              },
              active: {
                weight_threshold: 1,
                account_auths: [],
                key_auths: [[keys.active, 1]],
              },
              posting: {
                weight_threshold: 1,
                account_auths: [],
                key_auths: [[keys.posting, 1]],
              },
              memo_key: keys.memo,
              json_metadata: '',
              extensions: [],
            }
          ]],
        });

        tx.should.have.properties([
          'expiration',
          'ref_block_num',
          'ref_block_prefix',
          'extensions',
          'operations',
        ]);
      } finally {
        hivejs.api.getDynamicGlobalPropertiesAsync = oldGetDynamicGlobalProperties;
        hivejs.api.getBlockAsync = oldGetBlockAsync;
      }
    });
  });

  describe('downvoting', () => {
    it('works', async () => {
      const tx = await hivejs.broadcast.voteAsync(
        postingWif,
        username,
        'yamadapc',
        'test-1-2-3-4-5-6-7-9',
        -1000
      );
      tx.should.have.properties([
        'expiration',
        'ref_block_num',
        'ref_block_prefix',
        'extensions',
        'operations',
        'signatures',
      ]);
    });
  });

  describe('voting', () => {
    beforeEach(() => {
      return Promise.delay(2000);
    });

    it('works', async () => {
      const tx = await hivejs.broadcast.voteAsync(
        postingWif,
        username,
        'yamadapc',
        'test-1-2-3-4-5-6-7-9',
        10000
      );

      tx.should.have.properties([
        'expiration',
        'ref_block_num',
        'ref_block_prefix',
        'extensions',
        'operations',
        'signatures',
      ]);
    });

    it('works with callbacks', (done) => {
      hivejs.broadcast.vote(
        postingWif,
        username,
        'yamadapc',
        'test-1-2-3-4-5-6-7-9',
        5000,
        (err, tx) => {
          if (err) return done(err);
          tx.should.have.properties([
            'expiration',
            'ref_block_num',
            'ref_block_prefix',
            'extensions',
            'operations',
            'signatures',
          ]);
          done();
        }
      );
    });
  });

  describe('customJson', () => {
    before(() => {
      return Promise.delay(2000);
    });

    it('works', async () => {
      const tx = await hivejs.broadcast.customJsonAsync(
        postingWif,
        [],
        [username],
        'follow',
        JSON.stringify([
          'follow',
          {
            follower: username,
            following: 'fabien',
            what: ['blog'],
          },
        ])
      );

      tx.should.have.properties([
        'expiration',
        'ref_block_num',
        'ref_block_prefix',
        'extensions',
        'operations',
        'signatures',
      ]);
    });
  });

  describe('writeOperations', () => {
    it('receives a properly formatted error response', () => {
      const wif = hivejs.auth.toWif('username', 'password', 'posting');
      return hivejs.broadcast.voteAsync(wif, 'voter', 'author', 'permlink', 0).
      then(() => {
        throw new Error('writeOperation should have failed but it didn\'t');
      }, (e) => {
        should.exist(e.message);
      });
    });
  });
});
