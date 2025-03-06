function isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Example usage:
const email1 = "example@example.com";
const email2 = "invalid-email@.com";

console.log(isValidEmail(email1)); // true
console.log(isValidEmail(email2)); // false
