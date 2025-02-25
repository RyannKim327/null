function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
console.log(isPrime(13)); // true
