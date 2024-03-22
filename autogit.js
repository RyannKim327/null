function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Test the function
console.log(validateEmail("example@example.com")); // true
console.log(validateEmail("example@.com")); // false
