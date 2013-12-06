#!/usr/bin/env node

var stdin = process.openStdin();
var crypto = require('crypto');
var sha1 = function(str) { 
	return crypto.createHash('sha1').update(str,'ascii').digest('hex');}
console.log ("hello world SHA1: " + sha1("hello world"));


