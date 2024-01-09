function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}
const email = "example@example.com";
if (validateEmail(email)) {
    console.log("Email is valid");
} else {
    console.log("Email is not valid");
}
