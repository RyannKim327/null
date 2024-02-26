function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Example Usage
console.log(factorial(5)); // Output: 120
