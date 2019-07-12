const simsimi = require('..')({
  key: '42a96efa-b79e-4ef4-a05a-f0dae9c66aad',
  api: 'http://sandbox.api.simsimi.com/request.p'
});

simsimi('Hello').then(response => {
  console.log(response);
}, e => console.error('simsimi error:', e));