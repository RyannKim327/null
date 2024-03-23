function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Test the function
const number = 17;
if (isPrime(number)) {
    console.log(number + ' is a prime number.');
} else {
    console.log(number + ' is not a prime number.');
}
