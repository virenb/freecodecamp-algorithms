/* Smallest Common Multiple - Intermediate Algorithm Scripting - freeCodeCamp

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Here are some helpful links:
Smallest Common Multiple

*/

function smallestCommons(arr) {
  var nums = []; // Empty array of array range
  var small = Math.min(arr[0], arr[1]); // Take the smallest of the two from arr parameter
  var large = Math.max(arr[0], arr[1]); // Take the largest of the two from arr parameter

  for (var i = small; i <= large; i++) { // loop through and push whole range into array we created
    nums.push(i);
  }

  function gcd(x, y) { // Euclids algorithm to find greatest common denominator, uses recursion
    if (y === 0)
      return x;
    else
      return gcd(y, x % y);
  }

  var lcm = nums[0]; // take least common multiple, first number in your array
  for (var j = 1; j < nums.length; j++) { // loop through your array
    var greatest = gcd(lcm, nums[j]); // start checking GCD
    lcm = (lcm * nums[j]) / greatest; // formula for LCM
  }
  return lcm;
}

smallestCommons([1, 5]); // i'm not good at math :>

/* Test Cases

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.

*/