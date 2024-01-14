function largestPrimeFactor(n) {
  let factor = 2;

  while (factor <= Math.sqrt(n)) {
    if (n % factor === 0) {
      n /= factor;
    } else {
      factor++;
    }
  }

  if (n > 1) {
    return n;
  } else {
    return factor - 1;
  }
}

const number = 123456;
const largestFactor = largestPrimeFactor(number);

console.log("The largest prime factor of", number, "is", largestFactor);
