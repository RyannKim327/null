function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const email = "example@example.com";
if (validateEmail(email)) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}
