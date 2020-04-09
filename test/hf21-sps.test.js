import assert from "assert"
import Promise from 'bluebird';
import should from 'should';
import hivejs from '../src';

const username = process.env.HIVE_USERNAME || 'guest123';
const password = process.env.HIVE_PASSWORD;
const activeWif = hivejs.auth.toWif(username, password, 'active');

describe('hivejs.hf21-accounts:', () => {
  it('has generated methods', () => {
    should.exist(hivejs.broadcast.createProposal);
    should.exist(hivejs.broadcast.updateProposalVotes);
    should.exist(hivejs.broadcast.removeProposal);
  });

  it('has promise methods', () => {
    should.exist(hivejs.broadcast.createProposalAsync);
    should.exist(hivejs.broadcast.updateProposalVotesAsync);
    should.exist(hivejs.broadcast.removeProposalAsync);
  });

  describe('create proposal ops', () => {
/*  Skip these tests. hivejs test infrastructure not set up for testing active auths
    Blocked by Hive issue #3546
    it('signs and verifies create_proposal', function(done) {
      let permlink = 'test';

      let tx = {
        'operations': [[
          'create_proposal', {
            'creator': username,
            'receiver': username,
            'start_date': '2019-09-01T00:00:00',
            'end_date': '2019-10-01T00:00:00',
            'daily_pay': '1.000 SBD',
            'subject': 'testing',
            'permlink': permlink
        }]]
      }

      hivejs.api.callAsync('condenser_api.get_version', []).then((result) => {
        if(result['blockchain_version'] < '0.22.0') return done();
        result.should.have.property('blockchain_version');

        hivejs.broadcast._prepareTransaction(tx).then(function(tx){
          tx = hivejs.auth.signTransaction(tx, [activeWif]);
          hivejs.api.verifyAuthorityAsync(tx).then(
            (result) => {result.should.equal(true); done();},
            (err)    => {done(err);}
          );
        });
      });
    })

    it('signs and verifies update_proposal_votes', function(done) {
      let tx = {
        'operations': [[
          'update_proposal_votes', {
            'voter': username,
            'proposal_ids': [7],
            'approve': true
        }]]
      }

      return done();

      hivejs.broadcast._prepareTransaction(tx).then(function(tx){
        tx = hivejs.auth.signTransaction(tx, [activeWif]);
        hivejs.api.verifyAuthorityAsync(tx).then(
          (result) => {result.should.equal(true); done();},
          (err)    => {done(err);}
        );
      });
    })
*/
  });
});
