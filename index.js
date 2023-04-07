var url = require('url');
var https = require('https');
var { SocksProxyAgent } = require('socks-proxy-agent');

const fs = require('fs');
const { stdin } = require('process');

// SOCKS proxy to connect to
var proxy = 'socks://127.0.0.1:10808';

// HTTP endpoint for the proxy to connect to
var endpoint = 'https://www.google.com';
var opts = url.parse(endpoint);

// create an instance of the `SocksProxyAgent` class with the proxy server information
var agent = new SocksProxyAgent(proxy);
opts.agent = agent;

https.get(opts, function (res) {
  res.pipe(process.stdout);
});