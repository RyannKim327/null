function largestPrimeFactor(number) {
    let largestPrime = 1;
    
    // Start checking for prime factors from 2
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // Check if the number is divisible by i
        while (number % i === 0) {
            largestPrime = i;
            number /= i;
        }
    }
    
    // If the remaining number is greater than 1, update largestPrime
    if (number > largestPrime) {
        largestPrime = number;
    }
    
    return largestPrime;
}
let number = 123456789;
let result = largestPrimeFactor(number);

console.log(`The largest prime factor of ${number} is: ${result}`);
