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

    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

// Test the function
const num = 17;
if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is not a prime number.`);
}
