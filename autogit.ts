function isPrime(num: number): boolean {
    if (num <= 1) return false; // Numbers less than 2 are not prime
    if (num <= 3) return true; // 2 and 3 are prime numbers

    // Check for divisibility by 2 and 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check for factors from 5 to the square root of num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true; // If no factors found, num is prime
}

// Example usage:
const numberToCheck = 29;
console.log(`${numberToCheck} is prime: ${isPrime(numberToCheck)}`);
