/* Missing Letters - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
-----
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str) {
  var strArray = str.split('').map(function(letter) { // create array of str letters and map them out to return each charCode
    return letter.charCodeAt();
  });

  for (var i = 0; i < strArray.length; i++) { // loop through the array
    if (strArray[i + 1] - strArray[i] > 1) { // check if the difference between letters is greater than one
      return String.fromCharCode(strArray[i] + 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");

/* Test Cases
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/