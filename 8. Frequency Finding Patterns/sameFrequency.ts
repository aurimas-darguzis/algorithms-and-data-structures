// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1: number, num2: number): boolean {
  const num1ToString = String(num1);
  const num2ToString = String(num2);

  if (num1ToString.length !== num2ToString.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of num1ToString) {
    frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1;
  }

  for (let val of num2ToString) {
    frequencyCounter2[val] = frequencyCounter2[val] + 1 || 1;
  }

  for (let key in frequencyCounter1) {
    // check if they have the same frequency of digits
    if (!(key in frequencyCounter2)) {
      return false;
    }

    // checks if the corresponding values are the same
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
