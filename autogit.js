function largestPrimeFactor(number) {
  // Your code here
}
function largestPrimeFactor(number) {
  let largestFactor = 1;
  // Your code here
}
function largestPrimeFactor(number) {
  let largestFactor = 1;
  
  while (number % 2 === 0) {
    largestFactor = 2;
    number = number / 2;
  }
  
  // Your code here
}
function largestPrimeFactor(number) {
  let largestFactor = 1;
  
  while (number % 2 === 0) {
    largestFactor = 2;
    number = number / 2;
  }
  
  for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
    // Your code here
  }
}
function largestPrimeFactor(number) {
  let largestFactor = 1;
  
  while (number % 2 === 0) {
    largestFactor = 2;
    number = number / 2;
  }
  
  for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
    while (number % i === 0) {
      largestFactor = i;
      number = number / i;
    }
  }
  
  // Your code here
}
function largestPrimeFactor(number) {
  let largestFactor = 1;
  
  while (number % 2 === 0) {
    largestFactor = 2;
    number = number / 2;
  }
  
  for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
    while (number % i === 0) {
      largestFactor = i;
      number = number / i;
    }
  }
  
  if (number > 2) {
    largestFactor = number;
  }
  
  return largestFactor;
}
const number = 84;
const largestPrimeFactorOfNumber = largestPrimeFactor(number);
console.log(largestPrimeFactorOfNumber);
