/* Sum All Numbers in a Range - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
-----
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
*/
*

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var total = 0;
  for (var i = min; i <= max; i++) {
    total += i;
  }
  return total;
}

sumAll([1, 4]);

/* Test Cases
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/