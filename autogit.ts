function validateEmail(email: string): boolean {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex
    return emailRegex.test(email);
}

// Example usage
const emailToTest = "example@example.com";
const isValid = validateEmail(emailToTest);
console.log(`Is the email "${emailToTest}" valid? `, isValid); // Output: true
