function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Test the function
const email = "test@example.com";
if (validateEmail(email)) {
    console.log("Email is valid");
} else {
    console.log("Email is invalid");
}
