function largestPrimeFactor(number) {
    let factor = 2;
    
    while (factor <= Math.sqrt(number)) {
        if (number % factor === 0) {
            number /= factor;
        } else {
            factor++;
        }
    }
    
    return number;
}

// Example usage
const number = 13195;
console.log(largestPrimeFactor(number)); // Output: 29
