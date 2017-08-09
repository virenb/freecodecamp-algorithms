/* Falsy Bouncer - Basic Algorithm Scripting - freeCodeCamp

Instructions 
------------
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:
Boolean Objects
Array.prototype.filter()
*/

function bouncer(arr) {
  return arr.filter(Boolean); //filters out true Booleans
}

bouncer([7, "ate", "", false, 9]);

/* Test Cases
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/