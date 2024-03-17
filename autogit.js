function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    if (number <= 3) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Test the function
console.log(isPrime(7)); // Output: true
console.log(isPrime(12)); // Output: false
