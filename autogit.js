function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Test the function
const num = 17;
if (isPrime(num)) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}
