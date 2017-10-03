/* Boo Who - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
-----
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

Here are some helpful links:

Boolean Objects
*/

function booWho(bool) {
  return typeof bool === 'boolean'; //we will return true if typeof bool parameter is true or false
}
//We want to return boolean primitives, which are just true or false. Things like NaN or null are objects.

booWho(null);

/* Test Cases
booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho("a") should return false.
booWho("true") should return false.
booWho("false") should return false.

*/