/* Title Case a Sentence - Basic Algorithm Scripting - freeCodeCamp
Instructions
------------
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Here are some helpful links:
String.prototype.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/

function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => { // make all lower case, split into an array, and make a new array using map()
  	return (word.charAt(0).toUpperCase() + word.slice(1)); // map each index, making first character (0) upper case 
  }).join(' '); //use join to make array into a string
}

titleCase("I'm a little tea pot");

/* Test Cases
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
*/