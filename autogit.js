function validateEmail(email) {
    // Regular expression for validating email addresses
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the regular expression
    return regex.test(email);
}

// Test the function with an email address
const email = "example@example.com";
console.log(validateEmail(email)); // Output: true
