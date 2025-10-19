function helloWorld() {
  return "Hello, World!";
}
function sumToNumber(a, b) {
  return a + b;
}
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
function findMaximum(a, b, c) {
  return Math.max(a, b, c);
}
function factorial(n) {
  if (n < 0) return undefined; 
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
function isPalindrome(str) {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}
function simpleCalculator(a, b, operation) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b !== 0) return a / b;
      return undefined;
    default:
      return undefined;
  }
}
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
function arraySum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
function findMissingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}
function twoSum(arr, target) {
  const numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(arr[i], i);
  }
  return null;
}
// Clock Angle
function twoSum(arr, target) {
  const numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(arr[i], i);
  }
  return null;
}
// Clock Angle
function twoSum(arr, target) {
  const numMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(arr[i], i);
  }
  return null;
}

