//  Name: Tommy Cao
//  Date: 4/20/18
//  Description: Sample of Jest JavaScript Testing Framework.

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = isAnagram;
