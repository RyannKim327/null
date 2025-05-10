const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email: string): boolean {
    return emailRegex.test(email);
}

// Example usage:
const email1 = "example@example.com";
const email2 = "invalid-email.com";

console.log(validateEmail(email1)); // true
console.log(validateEmail(email2)); // false
const complexEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;

function validateComplexEmail(email: string): boolean {
    return complexEmailRegex.test(email);
}

// Example usage:
const complexEmail1 = "example.name+tag@sub.domain.com";
const complexEmail2 = "invalid.email@.com";

console.log(validateComplexEmail(complexEmail1)); // true
console.log(validateComplexEmail(complexEmail2)); // false
