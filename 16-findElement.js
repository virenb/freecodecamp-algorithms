/* Finders Keepers - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
-----
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Here are some helpful links:
Array.prototype.filter()

*/

function findElement(arr, func) {
  var argsArray = Array.from(arr); // ES6? method to take argument and make an array from it
  var testFunc = argsArray.find(function(num) { // find() over filter() since it returns first true element
    return num % 2 === 0;
  });
  return testFunc;
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });

/* Test Cases

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

*/