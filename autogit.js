function largestPrimeFactor(number) {
    let prime = 2;
    
    while (prime <= number) {
        if (number % prime === 0) {
            number /= prime;
        } else {
            prime++;
        }
    }
    
    return prime;
}

// Example
const number = 13195;
const largestPrime = largestPrimeFactor(number);
console.log("The largest prime factor of", number, "is", largestPrime);
