const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Example usage
const testEmail = "example@example.com";
console.log(isValidEmail(testEmail)); // Output: true

const invalidEmail = "example.com";
console.log(isValidEmail(invalidEmail)); // Output: false
