/* Sorted Union - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
------------
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Here are some helpful links:
Arguments object
Array.prototype.reduce()

*/

function uniteUnique(arr) {
  const args = Array.from(arguments); //Convert parameters into an Array
  let unitedArr = args.reduce((a, b) => {  //Use reduce add all elements into one array
    return a.concat(b.filter((i) => {       //Use filter to
      return a.indexOf(i) === -1;         // Check if element doesn't exist in array
    }));
  })
  return unitedArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/* Test Cases
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/