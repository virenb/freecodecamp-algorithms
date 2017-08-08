// Reverse a String - Basic Algorithm Scripting - freeCodeCamp
// Instructions
// ------
// Reverse the provided string. 
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
// Here are some helpful links:
// Global String Object
// String.prototype.split()
// Array.prototype.reverse()
// Array.prototype.join() 

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

/* Test Cases
reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
*/