var express = require('express'),
	http = require('http');

$(function() {   // when document is ready
	http.get("https://api.twitter.com/1/statuses/mentions.json?include_entities=true", function(res) {
		console.log(res);
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});
} );