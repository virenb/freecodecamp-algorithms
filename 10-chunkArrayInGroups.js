/*
Chunky Monkey - Basic Algorithm Scripting - freeCodeCamp
Instructions
------------
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Here are some helpful links:
Array.prototype.push()
Array.prototype.slice()
 */

function chunkArrayInGroups(arr, size) {
  var newArr = []; // create new array 
  for (var i = 0; i < arr.length; i+= size) { // loop through array, starting at 0 index, increment by size
  	newArr.push(arr.slice(i, i + size)); //push 0 and 1 index into new array 
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/* Test Cases
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/