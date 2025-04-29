const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
const email1 = "example@example.com";
const email2 = "invalid-email@.com";

console.log(validateEmail(email1)); // true
console.log(validateEmail(email2)); // false
function validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Test the function
const emails = [
    "test@example.com",
    "invalid-email",
    "another.test@domain.co",
    "user@sub.domain.com",
    "user@.com",
];

emails.forEach(email => {
    console.log(`Is "${email}" a valid email? ${validateEmail(email)}`);
});
