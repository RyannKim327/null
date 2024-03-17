function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Test the function with an email address
const email = 'test@example.com';
if (validateEmail(email)) {
    console.log('Valid email address');
} else {
    console.log('Invalid email address');
}
