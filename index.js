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