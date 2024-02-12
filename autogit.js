function validateEmail(email) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
}

// Example usage
const email = "test@example.com";
const isValid = validateEmail(email);
console.log(isValid); // Output: true
