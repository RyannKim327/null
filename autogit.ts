function validateEmail(email: string): boolean {
    // Regular expression pattern for validating email addresses
    const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the pattern
    return emailPattern.test(email);
}

// Example usage:
const email1 = "example@example.com";
const email2 = "invalid-email@.com";

console.log(validateEmail(email1)); // Output: true
console.log(validateEmail(email2)); // Output: false
npm install validator
import validator from 'validator';

const email = "example@example.com";

if (validator.isEmail(email)) {
    console.log("Valid email");
} else {
    console.log("Invalid email");
}
