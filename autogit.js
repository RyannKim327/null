function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Example usage
const email = "example@email.com";
if (validateEmail(email)) {
    console.log("Email is valid");
} else {
    console.log("Email is invalid");
}
