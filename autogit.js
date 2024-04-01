function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Test the isValidEmail function
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid_email.com")); // false
