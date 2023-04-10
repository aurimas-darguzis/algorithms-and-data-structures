/**
 * Implement a function called, areThereDuplicates
 * which accepts a variable number of arguments, 
 * and checks whether there are any duplicates among 
 * the arguments passed in.  You can solve this using 
 * the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
 */

function areThereDuplicates(...args: (string | number)[]): boolean {
  if (arguments.length === 0) return false;

  let i = 0;
  let j = 1;
  while (j < args.length) {
    if (args[i] === args[j]) {
      return true;
    }
    i++;
    j++;
  }

  return false;
}

function areThereDuplicatesFrequencyPattern(
  ...args: (string | number)[]
): boolean {
  const frequencyCounter = {};

  for (let value of args) {
    frequencyCounter[value] = frequencyCounter[value]
      ? frequencyCounter[value] + 1
      : 1;
  }

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
}
