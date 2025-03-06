function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Test the function with some examples
const emails = [
    "test@example.com",
    "invalid-email",
    "user@domain.co",
    "user.name@sub.domain.com",
    "user@.com"
];

emails.forEach(email => {
    console.log(`${email}: ${isValidEmail(email)}`);
});
