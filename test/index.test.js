var assert = require('assert');

var isEmoji = require('../index.js');


describe('is-emoji', function() {
  it('should identify emoji', function() {
    assert(isEmoji('🌻'));
    assert(!isEmoji('q'));
  });

  it('should identify emoji first char codes', function() {
    assert(isEmoji.isFirstCharCode('🌻'[0].charCodeAt(0)));
    assert(!isEmoji.isFirstCharCode('a'[0].charCodeAt(0)));
  });
});
