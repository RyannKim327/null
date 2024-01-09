function largestPrimeFactor(number) {
    // Your code here
}
while (number % 2 === 0) {
    number = number / 2;
}
for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
    while (number % i === 0) {
        number = number / i;
    }
}
if (number > 2) {
    return number;
}
function largestPrimeFactor(number) {
    while (number % 2 === 0) {
        number = number / 2;
    }
    for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
        while (number % i === 0) {
            number = number / i;
        }
    }
    if (number > 2) {
        return number;
    }
}

// Example usage
console.log(largestPrimeFactor(13195)); // Output: 29
