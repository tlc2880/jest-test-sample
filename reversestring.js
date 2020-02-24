//  Name: Tommy Cao
//  Date: 4/20/18
//  Description: Sample of Jest JavaScript Testing Framework.

const reverseString = str =>
  str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

module.exports = reverseString;
