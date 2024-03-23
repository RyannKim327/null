function largestPrimeFactor(number) {
    let factors = [];
    
    // Extract all factors, including duplicate factors
    for (let i = 2; i <= number; i++) {
        while (number % i === 0) {
            factors.push(i);
            number /= i;
        }
    }

    // Extract prime factors from factors array
    let primeFactors = factors.filter(factor => {
        for (let i = 2; i < factor; i++) {
            if (factor % i === 0) {
                return false;
            }
        }
        return factor > 1;
    });

    return Math.max(...primeFactors);
}

// Test with a number
let number = 315;
console.log("Largest prime factor of " + number + " is " + largestPrimeFactor(number));
