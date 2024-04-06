function largestPrimeFactor(number) {
    let largestPrime = 1;
    
    // Divide by 2 as long as the number is divisible by 2
    while (number % 2 === 0) {
        largestPrime = 2;
        number = number / 2;
    }
    
    // Check for other prime factors starting from 3
    for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
        while (number % i === 0) {
            largestPrime = i;
            number = number / i;
        }
    }
    
    // If the remaining number is greater than 2, it's a prime factor
    if (number > 2) {
        largestPrime = number;
    }
    
    return largestPrime;
}

// You can test the function with a given number
const number = 13195; // e.g., for number 13195
console.log(largestPrimeFactor(number)); // Output: 29
