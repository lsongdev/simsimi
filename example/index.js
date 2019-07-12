const simsimi = require('..')({
  key: '6uaIjLXATy86Ty98mXD9s1OrJst3Ebnx5ZIbwh0c',
});

simsimi('Hello').then(response => {
  console.log(response);
}, e => console.error('simsimi error:', e));