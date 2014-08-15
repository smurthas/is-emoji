var fs = require('fs');

var file = fs.readFileSync('./emoji-data-short.txt', {encoding: 'utf8'});

var lines = file.split('\n');
lines.pop();

module.exports.isEmoji = function(char) {
  return lines.indexOf(char) !== -1;
};
