/* Spinal Tap Case - Intermediate Algorithm Scriping - freeCodeCamp

Instructions
------------
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Here are some helpful links:

RegExp
String.prototype.replace()

*/

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2'); //This searches for a small character followed by a big character
  return str.replace(/\s|_/g, '-').toLowerCase(); //Using replace() again to take out spaces or underscores and replacing with dash then going lower case
}

spinalCase('This Is Spinal Tap');


/* Test Cases

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".

*/