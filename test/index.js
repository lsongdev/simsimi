const assert = require('assert');
const simsimi = require('..')({
  key: '6uaIjLXATy86Ty98mXD9s1OrJst3Ebnx5ZIbwh0c',
});

const input = 'hello simsimi';

simsimi(input, (err, text, response) => {
  assert.ok(text);
  assert.equal(err, null);
  assert.equal(response.status, 200);
  assert.equal(response.statusMessage, 'Ok');
  assert.equal(response.request.utext, input);
});