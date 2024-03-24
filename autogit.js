function validateEmail(email) {
    // Regular expression pattern for validating email addresses
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Use the test() method to check if the email address matches the pattern
    return pattern.test(email);
}

// Test the function with an example email address
const email = 'example@example.com';
if (validateEmail(email)) {
    console.log('Email address is valid.');
} else {
    console.log('Email address is invalid.');
}
