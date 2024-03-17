function isPrime(num) {
    if(num <= 1) {
        return false;
    }

    // Check if num is divisible by any number from 2 to the square root of num
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

// Test the function
console.log(isPrime(17));  // Output: true
console.log(isPrime(15));  // Output: false
