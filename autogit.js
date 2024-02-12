function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }
    
    // Check if the number is divisible by any number from 2 to its square root
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Example usage
let number = 17;
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
