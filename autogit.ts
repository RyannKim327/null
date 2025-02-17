function validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Example usage:
const email = "example@example.com";
console.log(validateEmail(email)); // Output: true or false
