function largestPrimeFactor(number) {
    let largestPrime = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        while (number % i === 0) {
            largestPrime = i;
            number = number / i;
        }
    }
    if (number > 1) {
        largestPrime = number;
    }
    return largestPrime;
}

let num = 13195;
console.log("The largest prime factor of " + num + " is " + largestPrimeFactor(num));
