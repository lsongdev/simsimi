## simsimi

 ![npm](https://badge.fury.io/js/simsimi.png) [![Build Status](https://travis-ci.org/song940/simsimi.svg?branch=master)](https://travis-ci.org/song940/simsimi)

![simsimi logo](./simsimi-logo.png)

[simsimi](http://developer.simsimi.com) sdk in Node.js .

**>> simsimi v3 versions please checkout [next branch](https://github.com/song940/simsimi/tree/next) <<**

### Installation

```bash
~$ npm i simsimi@2 --save
```

### Example

```js
const simsimi = require('simsimi')({
  key: 'your-license-key',
  api: 'http://sandbox.api.simsimi.com/request.p'
});

simsimi('Hi')
.then(response => {
  console.log('simsimi say:', response); // What's up ?
});
```

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 lsong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
