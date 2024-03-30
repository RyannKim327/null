function largestPrimeFactor(num) {
    let factors = [];
    
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    
    if (num !== 1) {
        factors.push(num);
    }

    return Math.max(...factors);
}

// Example usage
const number = 13195;
const largestPrime = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestPrime}`);
