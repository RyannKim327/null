function largestPrimeFactor(number) {
  let i = 2;
 
  while (i <= number) {
    if (number % i === 0) {
      number /= i;
    } else {
      i++;
    }
  }
 
  return i;
}
const number = 84;
const largestFactor = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestFactor}`);
The largest prime factor of 84 is 7
