function factorial(n) {
    if (n === 0) {  // Base case: factorial of 0 is 1
        return 1;
    } else {
        return n * factorial(n - 1);  // Recursive call to calculate factorial
    }
}

// Call the factorial function with a number
let number = 5;
console.log(`Factorial of ${number} is: ${factorial(number)}`);
