function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Test the function
const email = "test@example.com";
if (validateEmail(email)) {
    console.log("Email is valid");
} else {
    console.log("Email is invalid");
}
