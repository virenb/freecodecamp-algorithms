/* Symmetric Difference - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
-----
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Here are some helpful links:

Array.prototype.reduce()
Symmetric Difference

*/

function sym(args) {
  var argsArray = Array.prototype.slice.call(arguments); // take args and put into arrays

  function symDiff(arr1, arr2) {
    var results = []; // make empty array for symmetric differences of the arrays

    arr1.forEach(function(i) {
      if (arr2.indexOf(i) < 0 && results.indexOf(i) < 0) { // cycle through array and add into results array if the items are only in arr1
        results.push(i);
      }
    });

    arr2.forEach(function (i) {
      if (arr1.indexOf(i) < 0 && results.indexOf(i) < 0) { // cycle through array and add into results array if the items are only in arr2
        results.push(i);
      }
    });

    return results;
  }

  return argsArray.reduce(symDiff); // call symDiff function on the args

}

sym([1, 2, 3], [5, 2, 1, 4]);

/* Test Cases

sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.

*/