/* Steamroller - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
-----
Flatten a nested array. You must account for varying levels of nesting.

Here are some helpful links:
Array.isArray()

*/

function steamrollArray(arr) {
  var flatArray = []; // create empty array

  flatten(arr); // call our recursive flattening function

  function flatten(arr) {
    for (var i = 0; i < arr.length; i++) { // loop through array
      if (!Array.isArray(arr[i])) { // check if item is not array
        flatArray.push(arr[i]); // if not push item into new array
      } else {
        flatten(arr[i]); // recall flatten function
      }
    }
  }

  return flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);

/* Test Cases

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

*/