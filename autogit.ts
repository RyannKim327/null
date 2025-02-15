const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function isValidEmail(email: string): boolean {
    return emailPattern.test(email);
}
const email = "example@example.com";

if (isValidEmail(email)) {
    console.log("Valid email address!");
} else {
    console.log("Invalid email address!");
}
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email: string): boolean {
    return emailPattern.test(email);
}

// Example usage
const email = "example@example.com";
if (isValidEmail(email)) {
    console.log("Valid email address!");
} else {
    console.log("Invalid email address!");
}
