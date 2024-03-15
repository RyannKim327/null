function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Example usage
const email = 'example@example.com';
if (validateEmail(email)) {
    console.log('Email is valid');
} else {
    console.log('Email is not valid');
}
