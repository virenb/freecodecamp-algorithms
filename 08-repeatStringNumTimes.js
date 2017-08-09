/* Repeat a string repeat a string - Basic Algorithm Scripting - freeCodeCamp
Instructions
------------
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.

Here are some helpful links:
Global String Object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

function confirmEnding(str, target) {
  return str.substr(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

/* Test Cases
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Do not use the built-in method .endsWith() to solve the challenge.
*/