function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Example usage
const email1 = "test@example.com";
const email2 = "invalid-email";
console.log(validateEmail(email1)); // Output: true
console.log(validateEmail(email2)); // Output: false
