/* Arguments Optional - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
-----
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Here are some helpful links:
Closures
Arguments object

*/

function addTogether() {
  var checkNum = function (num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    var c = arguments[0];

    if (checkNum(c)) {
      return function (d) {
        if (c === undefined || checkNum(d) === undefined) {
          return undefined;
        } else {
          return c + d;
        }
      };
    }
  }
}

addTogether(2, 3);

/* Test Cases

addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.

*/