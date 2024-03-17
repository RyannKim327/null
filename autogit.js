function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    if (number <= 3) {
        return true;
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

// Test the function
const number = 17; // Change this to test different numbers
if (isPrime(number)) {
    console.log(number + ' is a prime number');
} else {
    console.log(number + ' is not a prime number');
}
