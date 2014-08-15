# is-emoji [![Build Status](https://travis-ci.org/smurthas/is-emoji.svg?branch=master)](https://travis-ci.org/smurthas/is-emoji)

Simple enough:

```javascript
var isEmoji = require('is-emoji');

isEmoji('🌻'); // true
isEmoji('🌻'); // true

// for string iteration, since emoji char will be broken up over two indexes.
var str = 'abc🚲def';

for (var i = 0; i < str.length; i++) {
  var s = str[i];
  // will be true for i == 3, which will tell you
  if (isEmoji.isFirstCharCode(s.charCodeAt(0))) {
    // the character is 4 bytes, so concatenate them
    s += str[i+1];
  }

  console.log(s);
}

```
