/* Confirm The Ending - Basic Algorithm Scripting - freeCodeCamp
Instructions
------------
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Here are some helpful links:
String.prototype.substr()
String.prototype.substring()
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