function factorial(n) {
    // Base case: if n is 0, return 1
    if (n === 0) {
        return 1;
    }
    
    // Recursive case: return n * factorial(n-1)
    return n * factorial(n - 1);
}

// You can call the factorial function with a number
let number = 5;
console.log(`The factorial of ${number} is: ${factorial(number)}`);
