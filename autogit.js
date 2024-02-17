function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Example Usage
const number = 29;
if (isPrime(number)) {
    console.log(number + ' is a prime number');
} else {
    console.log(number + ' is not a prime number');
}
