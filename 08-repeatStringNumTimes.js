/* Repeat a string repeat a string - Basic Algorithm Scripting - freeCodeCamp
Instructions
------------
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.

Here are some helpful links:
Global String Object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

function repeatStringNumTimes(str, num) {
  if (num <= 0 ) {
    return '';
  }
  if (num === 1) {
    return str;
  }
  else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes("abc", 3);

/* Test Cases
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/