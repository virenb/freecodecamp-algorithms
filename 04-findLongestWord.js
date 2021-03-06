/* Find the Longest Word in a String - Basic Algorithm Scripting - freeCodeCamp
Instructions
------------
Return the length of the longest word in the provided sentence.
Your response should be a number.

Here are some helpful links:
String.prototype.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
*/

function findLongestWord(str) {
  var strSortedArr = str.split(' ').sort(function(a,b) { // splits string into array, sort words from smallest to larges
    return a.length - b.length;
  });
  return strSortedArr[strSortedArr.length - 1].length; // retrieve length last index of array, which would be longest word, since we sorted
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/* Test Cases
findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/