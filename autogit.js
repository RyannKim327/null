function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Example usage
const email = "example@example.com";
if (validateEmail(email)) {
    console.log("Email is valid");
} else {
    console.log("Email is invalid");
}
