function validateEmail(email: string): boolean {
    // Regular expression for validating an email address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return emailPattern.test(email);
}

// Example usage
const email1 = "example@example.com";
const email2 = "invalid-email@.com";

console.log(validateEmail(email1)); // true
console.log(validateEmail(email2)); // false
