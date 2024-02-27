function largestPrimeFactor(number) {
    let factors = [];
    let i = 2;
    
    while (i <= number) {
        if (number % i === 0) {
            factors.push(i);
            number /= i;
        } else {
            i++;
        }
    }
    
    return factors[factors.length - 1];
}

const number = 13195;
const largestPrime = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestPrime}`);
