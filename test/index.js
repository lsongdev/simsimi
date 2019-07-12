const assert = require('assert');
const simsimi = require('..')({
  key: '86efbe69-ce5b-436f-ba4a-1a94310e20f6',
});

(async () => {
  const response = await simsimi('Hi');
  console.log(response);
  assert(response);
})();
