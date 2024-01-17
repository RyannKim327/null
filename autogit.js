function findLargestPrimeFactor(number) {
  let largestPrimeFactor = 1;

  while (number % 2 === 0) {
    largestPrimeFactor = 2;
    number /= 2;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      largestPrimeFactor = i;
      number /= i;
    }
  }

  if (number > 2) {
    largestPrimeFactor = number;
  }

  return largestPrimeFactor;
}

const number = 123456789; // Replace with your desired number
const largestPrimeFactor = findLargestPrimeFactor(number);
console.log("Largest Prime Factor:", largestPrimeFactor);
