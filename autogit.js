function largestPrimeFactor(number) {
    let factors = [];
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        while (number % i === 0) {
            factors.push(i);
            number = number / i;
        }
    }
    
    if (number > 1) {
        factors.push(number);
    }
    
    return factors[factors.length - 1];
}

// Example: Find the largest prime factor of 56
console.log(largestPrimeFactor(56)); // Output: 7
