'use strict';
const http = require('http');
const querystring = require('querystring');

const get = url =>
  new Promise(done => http.get(url, done));

const readStream = stream => 
  new Promise((resolve, reject) => {
    var buf = '';
    stream
      .on('error', reject)
      .on('data', chunk => buf += chunk)
      .on('end', () => resolve(buf));
  });

const format = response => {
  switch (response.result) {
    case 100:
      return response.response;
    default:
      const err = new Error(response.msg);
      err.code = response.result;
      throw err;
  }
};
/**
 * simsimi
 * http://developer.simsimi.com/api
 */
module.exports = options => {
  const {
    key, lc = 'en', ft = '0.0',
    api = 'http://api.simsimi.com/request.p'
  } = options;
  return (query, cb) => {
    if (typeof query === 'string')
      query = { text: query };
    const qs = querystring.stringify(Object.assign({
      key, lc, ft
    }, query));
    return Promise
    .resolve(`${api}?${qs}`)
    .then(get)
    .then(readStream)
    .then(JSON.parse)
    .then(format)
    .then(res => (cb && cb(null, res), res))
    .catch(err => {
      if(cb) cb(err)
      else throw err;
    })
  };
};