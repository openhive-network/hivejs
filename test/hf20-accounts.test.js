import Promise from 'bluebird';
import should from 'should';
import hivejs from '../src';

const username = process.env.HIVE_USERNAME || 'guest123';
const password = process.env.HIVE_PASSWORD;
const activeWif = hivejs.auth.toWif(username, password, 'active');

describe('hivejs.hf20-accounts:', () => {
  it('has generated methods', () => {
    should.exist(hivejs.broadcast.claimAccount);
    should.exist(hivejs.broadcast.createClaimedAccount);
  });

  it('has promise methods', () => {
    should.exist(hivejs.broadcast.claimAccountAsync);
    should.exist(hivejs.broadcast.createClaimedAccountAsync);
  });


  describe('claimAccount', () => {

/*  Skip these tests. hivejs test infrastructure not set up for testing active auths
    Blocked by Hive issue #3546
    it('signs and verifies auth', function(done) {
      let tx = {
        'operations': [[
          'claim_account', {
            'creator': username,
            'fee': '0.000 HIVE'}]]
      }

      hivejs.api.callAsync('condenser_api.get_version', []).then((result) => {
        if(result['blockchain_version'] < '0.22.0') return done();

        hivejs.broadcast._prepareTransaction(tx).then(function(tx){
          tx = hivejs.auth.signTransaction(tx, [activeWif]);
          hivejs.api.verifyAuthorityAsync(tx).then(
            (result) => {result.should.equal(true); done();},
            (err)    => {done(err);}
          );
        });
      });

    });

    it('claims and creates account', function(done) {
      this.skip(); // (!) need test account with enough RC

      hivejs.api.callAsync('condenser_api.get_version', []).then((result) => {
        if(result['blockchain_version'] < '0.22.0') return done();

        hivejs.broadcast.claimAccountAsync(activeWif, username, '0.000 HIVE', []).then((result) => {
            let newAccountName = username + '-' + Math.floor(Math.random() * 10000);
            let keys = hivejs.auth.generateKeys(
                username, password, ['posting', 'active', 'owner', 'memo']);

            hivejs.broadcast.createClaimedAccountAsync(
                activeWif,
                username,
                newAccountName,
                keys['owner'],
                keys['active'],
                keys['posting'],
                keys['memo'],
                {}, []
              ).then((result) => {
                should.exist(result);
                done();
            }, (err) => {done(err)});
        }, (err) => {done(err)});
      });
    });
*/
  });
});
