function largestPrimeFactor(number) {
    let factors = [];
    
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        while (number % i === 0) {
            factors.push(i);
            number /= i;
        }
    }
    
    if (number > 1) {
        factors.push(number);
    }
    
    let primeFactors = factors.filter(factor => {
        for (let j = 2; j <= Math.sqrt(factor); j++) {
            if (factor % j === 0) {
                return false;
            }
        }
        return factor > 1;
    });
    
    return Math.max(...primeFactors);
}

// Example usage
const number = 13195;
console.log(largestPrimeFactor(number)); // Output: 29
