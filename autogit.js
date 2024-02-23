function largestPrimeFactor(num) {
    let largestPrime = 1;
    
    // Remove all factors of 2
    while (num % 2 === 0) {
        largestPrime = 2;
        num = num / 2;
    }
    
    // Check for factors starting from 3
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        while (num % i === 0) {
            largestPrime = i;
            num = num / i;
        }
    }
    
    if (num > 2) {
        largestPrime = num;
    }
    
    return largestPrime;
}

const number = 13195;
console.log(largestPrimeFactor(number)); // Output: 29
