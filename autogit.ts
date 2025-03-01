function validateEmail(email: string): boolean {
    // Regular expression for validating an email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the regex
    return emailRegex.test(email);
}

// Example usage
const emailToTest = "example@example.com";
if (validateEmail(emailToTest)) {
    console.log(`${emailToTest} is a valid email address.`);
} else {
    console.log(`${emailToTest} is an invalid email address.`);
}
