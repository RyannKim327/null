function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

const email = "example@example.com";
if(validateEmail(email)) {
    console.log("Email is valid");
} else {
    console.log("Email is invalid");
}
