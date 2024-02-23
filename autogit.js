function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Test the function with an email address
const email = 'example@email.com';
if (validateEmail(email)) {
    console.log('Valid email address');
} else {
    console.log('Invalid email address');
}
