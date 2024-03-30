function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Test the function
const email = "example@email.com";
if(validateEmail(email)) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}
