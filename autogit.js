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

// Example usage
const number = 315;
console.log(largestPrimeFactor(number)); // Output: 7
