/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 
*/

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  //helps to check if we've seen a number before. so we don't enter an infinite loop
  let loopCatcher = new Set();

  while (!loopCatcher.has(n)) {
    loopCatcher.add(n);
    n = sumOfSquares(n);
    if (n === 1) return true;
  }
  return false;
};

function sumOfSquares(n) {
  let output = 0;

  while (n) {
    let unit = n % 10;
    unit = unit ** 2;
    output += unit;
    n = ~~(n / 10);
  }
  return output;
}
console.log(isHappy(2), false);
