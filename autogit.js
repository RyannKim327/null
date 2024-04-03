function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Example usage
const email = "example@example.com";
if (validateEmail(email)) {
    console.log("Email address is valid");
} else {
    console.log("Email address is invalid");
}
