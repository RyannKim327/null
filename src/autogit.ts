function isValidEmail(email: string): boolean {
    // Regular expression pattern for validating an email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailPattern.test(email);
}

// Example usage:
const email = "example@example.com";
if (isValidEmail(email)) {
    console.log(`${email} is a valid email address.`);
} else {
    console.log(`${email} is not a valid email address.`);
}
npm install validator
import validator from 'validator';

function isValidEmail(email: string): boolean {
    return validator.isEmail(email);
}

// Example usage
const email = "example@example.com";

if (isValidEmail(email)) {
    console.log(`${email} is a valid email address.`);
} else {
    console.log(`${email} is not a valid email address.`);
}
