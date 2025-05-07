const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email: string): boolean {
    return emailRegex.test(email);
}

// Example usage:
const email1 = "test@example.com";
const email2 = "invalid-email@.com";

console.log(`${email1} is valid: ${isValidEmail(email1)}`); // true
console.log(`${email2} is valid: ${isValidEmail(email2)}`); // false
