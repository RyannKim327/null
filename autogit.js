function largestPrimeFactor(number) {
    let factor = 2;
    let largestFactor = 1;
    
    while (factor * factor <= number) {
        if (number % factor === 0) { // If factor divides the number
            largestFactor = factor; // Update largestFactor
            number = number / factor; // Divide the number by factor
        } else {
            factor++; // Increment factor
        }
    }
    
    if (number > largestFactor) {
        largestFactor = number; // Remaining number is the largest prime factor
    }
    
    return largestFactor;
}

// Example usage:
console.log(largestPrimeFactor(13195)); // Output: 29
console.log(largestPrimeFactor(600851475143)); // Output: 6857
