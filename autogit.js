function largestPrimeFactor(number) {
  let factor = 2;
  
  while (factor <= number) {
    if (number % factor === 0) {
      number /= factor;
    } else {
      factor++;
    }
  }
  
  return factor;
}
const number = 13195;
const largestFactor = largestPrimeFactor(number);

console.log("Largest prime factor: " + largestFactor);
Largest prime factor: 29
