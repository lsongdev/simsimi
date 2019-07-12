'use strict';
const https = require('https');

const post = (url, headers, body) =>
  new Promise((resolve, reject) => {
    const req = https.request(url,  {
      method: 'POST',
      headers
    }, resolve);
    req.on('error', reject);
    if(body) {
      if(typeof body !== 'string') body = JSON.stringify(body);
      req.write(body);
    }
    req.end();
  });

const readStream = stream => 
  new Promise((resolve, reject) => {
    var buf = '';
    stream
      .on('error', reject)
      .on('data', chunk => buf += chunk)
      .on('end', () => resolve(buf));
  });

const format = response => {
  switch (response.status) {
    case 200:
      return response;
    default:
      const err = new Error(response.statusMessage);
      err.response = response;
      err.code = response.status;
      throw err;
  }
};
/**
 * simsimi
 * https://workshop.simsimi.com/document?lc=en
 */
module.exports = options => {
  const {
    key,
    lang = 'en',
    api = 'https://wsapi.simsimi.com/190410/talk'
  } = options;
  return (query, cb) => {
    if (typeof query === 'string')
      query = { utext: query, lang };
    const headers = {
      'x-api-key': key,
      'Content-Type': 'application/json',
    };
    return Promise
    .resolve()
    .then(() => post(api, headers, query))
    .then(readStream)
    .then(JSON.parse)
    .then(format)
    .then(res => (cb && cb(null, res.atext, res), res.atext))
    .catch(err => {
      if(cb) cb(err)
      else throw err;
    })
  };
};