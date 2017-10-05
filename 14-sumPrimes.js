/* Sum All Primes - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
-----
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.

Here are some helpful links:
For Loops
Array.prototype.push()

*/

function sumPrimes(num) {
  var primes = [];
  for (var i = 2; i <= num; i++) { // loop through, checking if numbers are prime
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes.reduce(function(a,b) { // takes our array of prime numbers and adds them into one figure
    return a + b;
  });

  function isPrime(num) { // made a new function to check if number is prime, divisble only by 1 and itself
    for (var j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
}

sumPrimes(10);

/* Test Cases

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.

*/