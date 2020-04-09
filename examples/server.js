var hivejs = require('../lib');

hivejs.api.getAccountCount(function(err, result) {
	console.log(err, result);
});

hivejs.api.getAccounts(['dan'], function(err, result) {
	console.log(err, result);
	var reputation = hivejs.formatter.reputation(result[0].reputation);
	console.log(reputation);
});

hivejs.api.getState('trending/hivejs', function(err, result) {
	console.log(err, result);
});

hivejs.api.getFollowing('ned', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

hivejs.api.getFollowers('dan', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

hivejs.api.streamOperations(function(err, result) {
	console.log(err, result);
});

hivejs.api.getDiscussionsByActive({
  limit: 10,
  start_author: 'thecastle',
  start_permlink: 'this-week-in-level-design-1-22-2017'
}, function(err, result) {
	console.log(err, result);
});
