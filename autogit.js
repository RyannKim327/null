function largestPrimeFactor(number) {
    let largestPrime = 1;
    
    // Start from 2 (smallest prime number) and iterate up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // Check if i is a prime number
            let isPrime = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            
            if (isPrime) {
                largestPrime = i;
            }
        }
    }
    
    return largestPrime;
}
const number = 56;
const largestPrime = largestPrimeFactor(number);

console.log(`The largest prime factor of ${number} is: ${largestPrime}`);
