# Documentation

- [Install](#install)
- [Browser](#browser)
- [Config](#config)
- [JSON-RPC](#jsonrpc)
- [Database API](#api)
    - [Subscriptions](#subscriptions)
    - [Tags](#tags)
    - [Blocks and transactions](#blocks-and-transactions)
    - [Globals](#globals)
    - [Keys](#keys)
    - [Accounts](#accounts)
    - [Market](#market)
    - [Authority / validation](#authority--validation)
    - [Votes](#votes)
    - [Content](#content)
    - [Witnesses](#witnesses)
- [Login API](#login)
- [Follow API](#follow-api)
- [Broadcast API](#broadcast-api)
- [Broadcast](#broadcast)
- [Auth](#auth)
- [Formatter](#formatter)

# Install
```
$ npm install @hivechain/hivejs --save
```

# Browser 
```html 
<script src="./hivejs.min.js"></script>
<script>
hivejs.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
</script>
```

## Config
Default config should work with hivejs. however you can change it to work with golos
as 
```js
hivejs.api.setOptions({ url: 'wss://ws.golos.io' }); // assuming websocket is work at ws.golos.io
hivejs.config.set('address_prefix','GLS');
hivejs.config.set('chain_id','782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12');
```
### set
```
hivejs.config.set('address_prefix','STM');
```
### get
```
hivejs.config.get('chain_id');
```

## JSON-RPC
Here is how to activate JSON-RPC transport:
```js
hivejs.api.setOptions({ url: 'https://api.hive.blog' });
```

# API

## Subscriptions

### Set Subscribe Callback
```
hivejs.api.setSubscribeCallback(callback, clearFilter, function(err, result) {
  console.log(err, result);
});
```
### Set Pending Transaction Callback
```
hivejs.api.setPendingTransactionCallback(cb, function(err, result) {
  console.log(err, result);
});
```
### Set Block Applied Callback
```
hivejs.api.setBlockAppliedCallback(cb, function(err, result) {
  console.log(err, result);
});
```
### Cancel All Subscriptions
```
hivejs.api.cancelAllSubscriptions(function(err, result) {
  console.log(err, result);
});
```

## Tags

### Get Trending Tags
```
hivejs.api.getTrendingTags(afterTag, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Trending
```
hivejs.api.getDiscussionsByTrending(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Created
```
hivejs.api.getDiscussionsByCreated(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Active
```
hivejs.api.getDiscussionsByActive(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Cashout
```
hivejs.api.getDiscussionsByCashout(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Payout
```
hivejs.api.getDiscussionsByPayout(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Votes
```
hivejs.api.getDiscussionsByVotes(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Children
```
hivejs.api.getDiscussionsByChildren(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Hot
```
hivejs.api.getDiscussionsByHot(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Feed
```
hivejs.api.getDiscussionsByFeed(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Blog
```
hivejs.api.getDiscussionsByBlog(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Comments
```
hivejs.api.getDiscussionsByComments(query, function(err, result) {
  console.log(err, result);
});
```

## Blocks and transactions

### Get Block Header
```
hivejs.api.getBlockHeader(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get Block
```
hivejs.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get State
```
hivejs.api.getState(path, function(err, result) {
  console.log(err, result);
});
```
### Get Trending Categories
```
hivejs.api.getTrendingCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Best Categories
```
hivejs.api.getBestCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Active Categories
```
hivejs.api.getActiveCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Recent Categories
```
hivejs.api.getRecentCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```

## Globals

### Get Config
```
hivejs.api.getConfig(function(err, result) {
  console.log(err, result);
});
```
### Get Dynamic Global Properties
```
hivejs.api.getDynamicGlobalProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Chain Properties
```
hivejs.api.getChainProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Feed History
```
hivejs.api.getFeedHistory(function(err, result) {
  console.log(err, result);
});
```
### Get Current Median History Price
```
hivejs.api.getCurrentMedianHistoryPrice(function(err, result) {
  console.log(err, result);
});
```
### Get Hardfork Version
```
hivejs.api.getHardforkVersion(function(err, result) {
  console.log(err, result);
});
```
### Get Next Scheduled Hardfork
```
hivejs.api.getNextScheduledHardfork(function(err, result) {
  console.log(err, result);
});
```
### Get Reward Fund
```
hivejs.api.getRewardFund(name, function(err, result) {
  console.log(err, result);
});
```
### Get Vesting Delegations
```
hivejs.api.getVestingDelegations(account, from, limit, function(err, result) {
  console.log(err, result);
});
```

## Keys

### Get Key References
```
hivejs.api.getKeyReferences(key, function(err, result) {
  console.log(err, result);
});
```

## Accounts

### Get Accounts
```
hivejs.api.getAccounts(names, function(err, result) {
  console.log(err, result);
});
```
### Get Account References
```
hivejs.api.getAccountReferences(accountId, function(err, result) {
  console.log(err, result);
});
```
### Lookup Account Names
```
hivejs.api.lookupAccountNames(accountNames, function(err, result) {
  console.log(err, result);
});
```
### Lookup Accounts
```
hivejs.api.lookupAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Account Count
```
hivejs.api.getAccountCount(function(err, result) {
  console.log(err, result);
});
```
### Get Conversion Requests
```
hivejs.api.getConversionRequests(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Account History
```
hivejs.api.getAccountHistory(account, from, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Owner History
```
hivejs.api.getOwnerHistory(account, function(err, result) {
  console.log(err, result);
});
```
### Get Recovery Request
```
hivejs.api.getRecoveryRequest(account, function(err, result) {
  console.log(err, result);
});
```

## Market

### Get Order Book
```
hivejs.api.getOrderBook(limit, function(err, result) {
  console.log(err, result);
});
```
### Get Open Orders
```
hivejs.api.getOpenOrders(owner, function(err, result) {
  console.log(err, result);
});
```
### Get Liquidity Queue
```
hivejs.api.getLiquidityQueue(startAccount, limit, function(err, result) {
  console.log(err, result);
});
```

## Authority / validation

### Get Transaction Hex
```
hivejs.api.getTransactionHex(trx, function(err, result) {
  console.log(err, result);
});
```
### Get Transaction
```
hivejs.api.getTransaction(trxId, function(err, result) {
  console.log(err, result);
});
```
### Get Required Signatures
```
hivejs.api.getRequiredSignatures(trx, availableKeys, function(err, result) {
  console.log(err, result);
});
```
### Get Potential Signatures
```
hivejs.api.getPotentialSignatures(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Authority
```
hivejs.api.verifyAuthority(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Account Authority
```
hivejs.api.verifyAccountAuthority(nameOrId, signers, function(err, result) {
  console.log(err, result);
});
```

## Votes

### Get Active Votes
```
hivejs.api.getActiveVotes(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Account Votes
```
hivejs.api.getAccountVotes(voter, function(err, result) {
  console.log(err, result);
});
```

## Content


### Get Content
```
hivejs.api.getContent(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Content Replies
```
hivejs.api.getContentReplies(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Author Before Date
```
hivejs.api.getDiscussionsByAuthorBeforeDate(author, startPermlink, beforeDate, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Replies By Last Update
```
hivejs.api.getRepliesByLastUpdate(startAuthor, startPermlink, limit, function(err, result) {
  console.log(err, result);
});
```

## Witnesses


### Get Witnesses
```
hivejs.api.getWitnesses(witnessIds, function(err, result) {
  console.log(err, result);
});
```
### Get Witness By Account
```
hivejs.api.getWitnessByAccount(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Witnesses By Vote
```
hivejs.api.getWitnessesByVote(from, limit, function(err, result) {
  console.log(err, result);
});
```
### Lookup Witness Accounts
```
hivejs.api.lookupWitnessAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Witness Count
```
hivejs.api.getWitnessCount(function(err, result) {
  console.log(err, result);
});
```
### Get Active Witnesses
```
hivejs.api.getActiveWitnesses(function(err, result) {
  console.log(err, result);
});
```
### Get Miner Queue
```
hivejs.api.getMinerQueue(function(err, result) {
  console.log(err, result);
});
```

## Login API

### Login

/!\ It's **not safe** to use this method with your username and password. This method always return `true` and is only used in intern with empty values to enable broadcast.

```
hivejs.api.login('', '', function(err, result) {
  console.log(err, result);
});
```

### Get Api By Name
```
hivejs.api.getApiByName(apiName, function(err, result) {
  console.log(err, result);
});
```

## Follow API

### Get Followers
```
hivejs.api.getFollowers(following, startFollower, followType, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Following
```
hivejs.api.getFollowing(follower, startFollowing, followType, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Follow Count
```
hivejs.api.getFollowCount(account, function(err, result) {
  console.log(err, result);
});
```

## Broadcast API

### Broadcast Transaction Synchronous
```
hivejs.api.broadcastTransactionSynchronous(trx, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Block
```
hivejs.api.broadcastBlock(b, function(err, result) {
  console.log(err, result);
});
```

# Broadcast

### Account Create
```
hivejs.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Create With Delegation
```
hivejs.broadcast.accountCreateWithDelegation(wif, fee, delegation, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, extensions, function(err, result) {
  console.log(err, result);
});
```
### Delegate Vesting Shares
```
hivejs.broadcast.delegateVestingShares(wif, delegator, delegatee, vesting_shares, function(err, result) {
  console.log(err, result);
});
```
### Account Update
```
hivejs.broadcast.accountUpdate(wif, account, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Proxy
```
hivejs.broadcast.accountWitnessProxy(wif, account, proxy, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Vote
```
hivejs.broadcast.accountWitnessVote(wif, account, witness, approve, function(err, result) {
  console.log(err, result);
});
```
### Challenge Authority
```
hivejs.broadcast.challengeAuthority(wif, challenger, challenged, requireOwner, function(err, result) {
  console.log(err, result);
});
```
### Change Recovery Account
```
hivejs.broadcast.changeRecoveryAccount(wif, accountToRecover, newRecoveryAccount, extensions, function(err, result) {
  console.log(err, result);
});
```
### Comment
```
hivejs.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Comment Options
```
hivejs.broadcast.commentOptions(wif, author, permlink, maxAcceptedPayout, percentSteemDollars, allowVotes, allowCurationRewards, extensions, function(err, result) {
  console.log(err, result);
});
```
### Comment Payout
```
hivejs.broadcast.commentPayout(wif, author, permlink, payout, function(err, result) {
  console.log(err, result);
});
```
### Comment Reward
```
hivejs.broadcast.commentReward(wif, author, permlink, sbdPayout, vestingPayout, function(err, result) {
  console.log(err, result);
});
```
### Convert
```
hivejs.broadcast.convert(wif, owner, requestid, amount, function(err, result) {
  console.log(err, result);
});
```
### Curate Reward
```
hivejs.broadcast.curateReward(wif, curator, reward, commentAuthor, commentPermlink, function(err, result) {
  console.log(err, result);
});
```
### Custom
```
hivejs.broadcast.custom(wif, requiredAuths, id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Binary
```
hivejs.broadcast.customBinary(wif, id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Json
```
hivejs.broadcast.customJson(wif, requiredAuths, requiredPostingAuths, id, json, function(err, result) {
  console.log(err, result);
});
```
### Delete Comment
```
hivejs.broadcast.deleteComment(wif, author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Escrow Dispute
```
hivejs.broadcast.escrowDispute(wif, from, to, agent, who, escrowId, function(err, result) {
  console.log(err, result);
});
```
### Escrow Release
```
hivejs.broadcast.escrowRelease(wif, from, to, agent, who, receiver, escrowId, sbdAmount, steemAmount, function(err, result) {
  console.log(err, result);
});
```
### Escrow Transfer
```
hivejs.broadcast.escrowTransfer(wif, from, to, agent, escrowId, sbdAmount, steemAmount, fee, ratificationDeadline, escrowExpiration, jsonMeta, function(err, result) {
  console.log(err, result);
});
```
### Feed Publish
```
hivejs.broadcast.feedPublish(wif, publisher, exchangeRate, function(err, result) {
  console.log(err, result);
});
```
### Pow2
```
hivejs.broadcast.pow2(wif, work, newOwnerKey, props, function(err, result) {
  console.log(err, result);
});
```
### Fill Convert Request
```
hivejs.broadcast.fillConvertRequest(wif, owner, requestid, amountIn, amountOut, function(err, result) {
  console.log(err, result);
});
```
### Fill Order
```
hivejs.broadcast.fillOrder(wif, currentOwner, currentOrderid, currentPays, openOwner, openOrderid, openPays, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
hivejs.broadcast.fillVestingWithdraw(wif, fromAccount, toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Interest
```
hivejs.broadcast.interest(wif, owner, interest, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Cancel
```
hivejs.broadcast.limitOrderCancel(wif, owner, orderid, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create
```
hivejs.broadcast.limitOrderCreate(wif, owner, orderid, amountToSell, minToReceive, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create2
```
hivejs.broadcast.limitOrderCreate2(wif, owner, orderid, amountToSell, exchangeRate, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Liquidity Reward
```
hivejs.broadcast.liquidityReward(wif, owner, payout, function(err, result) {
  console.log(err, result);
});
```
### Pow
```
hivejs.broadcast.pow(wif, worker, input, signature, work, function(err, result) {
  console.log(err, result);
});
```
### Prove Authority
```
hivejs.broadcast.proveAuthority(wif, challenged, requireOwner, function(err, result) {
  console.log(err, result);
});
```
### Recover Account
```
hivejs.broadcast.recoverAccount(wif, accountToRecover, newOwnerAuthority, recentOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Report Over Production
```
hivejs.broadcast.reportOverProduction(wif, reporter, firstBlock, secondBlock, function(err, result) {
  console.log(err, result);
});
```
### Request Account Recovery
```
hivejs.broadcast.requestAccountRecovery(wif, recoveryAccount, accountToRecover, newOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Escrow Approve
```
hivejs.broadcast.escrowApprove(wif, from, to, agent, who, escrowId, approve, function(err, result) {
  console.log(err, result);
});
```
### Set Withdraw Vesting Route
```
hivejs.broadcast.setWithdrawVestingRoute(wif, fromAccount, toAccount, percent, autoVest, function(err, result) {
  console.log(err, result);
});
```
### Transfer
```
hivejs.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Vesting
```
hivejs.broadcast.transferToVesting(wif, from, to, amount, function(err, result) {
  console.log(err, result);
});
```
### Vote
```
hivejs.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
  console.log(err, result);
});
```
### Withdraw Vesting
```
hivejs.broadcast.withdrawVesting(wif, account, vestingShares, function(err, result) {
  console.log(err, result);
});
```
### Witness Update
```
hivejs.broadcast.witnessUpdate(wif, owner, url, blockSigningKey, props, fee, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
hivejs.broadcast.fillVestingWithdraw(wif, fromAccount, toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Fill Order
```
hivejs.broadcast.fillOrder(wif, currentOwner, currentOrderid, currentPays, openOwner, openOrderid, openPays, function(err, result) {
  console.log(err, result);
});
```
### Fill Transfer From Savings
```
hivejs.broadcast.fillTransferFromSavings(wif, from, to, amount, requestId, memo, function(err, result) {
  console.log(err, result);
});
```
### Comment Payout
```
hivejs.broadcast.commentPayout(wif, author, permlink, payout, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Savings
```
hivejs.broadcast.transferToSavings(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer From Savings
```
hivejs.broadcast.transferFromSavings(wif, from, requestId, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Cancel Transfer From Savings
```
hivejs.broadcast.cancelTransferFromSavings(wif, from, requestId, function(err, result) {
  console.log(err, result);
});
```

### Multisig
You can use multisignature to broadcast an operation.
```
hivejs.broadcast.send({
  extensions: [],
  operations: [
    ['vote', {
      voter: 'guest123',
      author: 'fabien',
      permlink: 'test',
      weight: 1000
    }]
  ]}, [privPostingWif1, privPostingWif2], (err, result) => {
  console.log(err, result);
});
```

# Auth

### Verify
```
hivejs.auth.verify(name, password, auths);
```

### Generate Keys
```
hivejs.auth.generateKeys(name, password, roles);
```

### Get Private Keys
```
hivejs.auth.getPrivateKeys(name, password, roles);
```

### Is Wif
```
hivejs.auth.isWif(privWif);
```

### To Wif
```
hivejs.auth.toWif(name, password, role);
```

### Wif Is Valid
```
hivejs.auth.wifIsValid(privWif, pubWif);
```

### Wif To Public
```
hivejs.auth.wifToPublic(privWif);
```

### Sign Transaction
```
hivejs.auth.signTransaction(trx, keys);
```

# Formatter

### Create Suggested Password
```
var password = hivejs.formatter.createSuggestedPassword();
console.log(password);
// => 'GAz3GYFvvQvgm7t2fQmwMDuXEzDqTzn9'
```

### Comment Permlink
```
var parentAuthor = 'ned';
var parentPermlink = 'a-selfie';
var commentPermlink = hivejs.formatter.commentPermlink(parentAuthor, parentPermlink);
console.log(commentPermlink);
// => 're-ned-a-selfie-20170621t080403765z'
```

### Estimate Account Value
```
var hivePower = hivejs.formatter.estimateAccountValue(account);
```

### Reputation
```
var reputation = hivejs.formatter.reputation(3512485230915);
console.log(reputation);
// => 56
```

### Vest To Hive
```
var hivePower = hivejs.formatter.vestToSteem(vestingShares, totalVestingShares, totalVestingFundSteem);
console.log(hivePower);
```

# Utils

### Validate Username
```
var isValidUsername = hivejs.utils.validateAccountName('test1234');
console.log(isValidUsername);
// => 'null'

var isValidUsername = hivejs.utils.validateAccountName('a1');
console.log(isValidUsername);
// => 'Account name should be longer.'
```
