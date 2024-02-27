function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Example usage:
const email = 'example@email.com';
if (validateEmail(email)) {
    console.log('Valid email address');
} else {
    console.log('Invalid email address');
}
