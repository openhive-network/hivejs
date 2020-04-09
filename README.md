[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/openhive-network/hivejs/blob/master/LICENSE)
[![js channel on discord](https://img.shields.io/badge/chat-discord-1c56a4.svg)](https://discord.gg/gWGyFy9)

# Hivejs
Hivejs the JavaScript API for Hive blockchain

# Documentation

- [Install](https://github.com/openhive-network/hivejs/tree/master/doc#install)
- [Browser](https://github.com/openhive-network/hivejs/tree/master/doc#browser)
- [Config](https://github.com/openhive-network/hivejs/tree/master/doc#config)
- [Database API](https://github.com/openhive-network/hivejs/tree/master/doc#api)
    - [Subscriptions](https://github.com/openhive-network/hivejs/tree/master/doc#subscriptions)
    - [Tags](https://github.com/openhive-network/hivejs/tree/master/doc#tags)
    - [Blocks and transactions](https://github.com/openhive-network/hivejs/tree/master/doc#blocks-and-transactions)
    - [Globals](https://github.com/openhive-network/hivejs/tree/master/doc#globals)
    - [Keys](https://github.com/openhive-network/hivejs/tree/master/doc#keys)
    - [Accounts](https://github.com/openhive-network/hivejs/tree/master/doc#accounts)
    - [Market](https://github.com/openhive-network/hivejs/tree/master/doc#market)
    - [Authority / validation](https://github.com/openhive-network/hivejs/tree/master/doc#authority--validation)
    - [Votes](https://github.com/openhive-network/hivejs/tree/master/doc#votes)
    - [Content](https://github.com/openhive-network/hivejs/tree/master/doc#content)
    - [Witnesses](https://github.com/openhive-network/hivejs/tree/master/doc#witnesses)
- [Login API](https://github.com/openhive-network/hivejs/tree/master/doc#login)
- [Follow API](https://github.com/openhive-network/hivejs/tree/master/doc#follow-api)
- [Broadcast API](https://github.com/openhive-network/hivejs/tree/master/doc#broadcast-api)
- [Broadcast](https://github.com/openhive-network/hivejs/tree/master/doc#broadcast)
- [Auth](https://github.com/openhive-network/hivejs/tree/master/doc#auth)


Here is full documentation:
https://github.com/openhive-network/hivejs/tree/master/doc

## Browser
```html
<script src="./hivejs.min.js"></script>
<script>
hivejs.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
</script>
```

## CDN
https://cdn.jsdelivr.net/npm/hivejs/dist/hivejs.min.js<br/>
```html
<script src="https://cdn.jsdelivr.net/npm/hive/dist/hivejs.min.js"></script>
```

## Webpack
[Please have a look at the webpack usage example.](https://github.com/openhive-network/hivejs/blob/master/examples/webpack-example)

## Server
## Install
```
$ npm install hivejs --save
```

## RPC Servers
https://api.hive.blog By Default<br/>
https://anyx.io<br/>
https://api.openhive.network<br/>
https://api.hivekings.com<br/>
https://rpc.esteem.app<br/>

## Examples
### Broadcast Vote
```js
var hivejs = require('hivejs');

var wif = hivejs.auth.toWif(username, password, 'posting');
hivejs.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
	console.log(err, result);
});
```

### Get Accounts
```js
hivejs.api.getAccounts(['ned', 'dan'], function(err, result) {
	console.log(err, result);
});
```

### Get State
```js
hivejs.api.getState('/trends/funny', function(err, result) {
	console.log(err, result);
});
```

### Reputation Formatter
```js
var reputation = hivejs.formatter.reputation(user.reputation);
console.log(reputation);
```

### Hive Testnet
Hivejs requires some configuration to work on the public Hive testnet.

You need to set two Hive API options, `address_prefix` and `chain_id`.
```js
hivejs.api.setOptions({
  address_prefix: 'TST',
  chain_id: '46d82ab7d8db682eb1959aed0ada039a6d49afa1602491f93dde9cac3e8e6c32',
  useTestNet: true,
});
```

The Chain ID could change. If it does, it may not be reflected here, but will be documented on any testnet launch announcements.

## Contributions
Patches are welcome! Contributors are listed in the package.json file. Please run the tests before opening a pull request and make sure that you are passing all of them. If you would like to contribute, but don't know what to work on, check the issues list or on Discord channel #javascript https://discord.gg/gWGyFy9.

## Issues
When you find issues, please report them!

## License
MIT
