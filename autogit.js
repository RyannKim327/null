function largestPrimeFactor(number) {
    let largestPrime = 1;
    
    // Check for divisibility by 2
    while (number % 2 === 0) {
        largestPrime = 2;
        number = number / 2;
    }
    
    // Check for divisibility by odd numbers
    for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
        while (number % i === 0) {
            largestPrime = i;
            number = number / i;
        }
    }
    
    // Check if the remaining number is a prime number
    if (number > 2) {
        largestPrime = number;
    }
    
    return largestPrime;
}

let number = 13195; // Enter the number for which you want to find the largest prime factor
console.log(largestPrimeFactor(number)); // Prints the largest prime factor of the number
