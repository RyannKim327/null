function largestPrimeFactor(num) {
  let factor = 2;

  while (num > 1) {
    if (num % factor === 0) {
      num /= factor;
    } else {
      factor++;
    }
  }

  return factor;
}
const number = 84;
const largestFactor = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestFactor}`);
