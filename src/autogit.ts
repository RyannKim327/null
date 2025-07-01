local-part@domain
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
function validateEmail(email: string): boolean {
    const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    return regex.test(email);
}

// Usage
const email1 = "example.user@domain.com";
const email2 = "invalid-email@domain";

console.log(validateEmail(email1)); // true
console.log(validateEmail(email2)); // false
function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Usage remains the same
function validateEmail(email: string | null | undefined): boolean {
    if (!email) {
        return false; // Early return for null or undefined
    }
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email.trim());
}

// Usage
const email1 = " example.user@domain.com ";
const email2 = "";

console.log(validateEmail(email1)); // true
console.log(validateEmail(email2)); // false
function validateEmail(email: string | null | undefined): boolean {
    if (!email) {
        console.error("Email is required.");
        return false;
    }

    const trimmedEmail = email.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(trimmedEmail)) {
        console.error("Invalid email format.");
        return false;
    }

    console.log("Email is valid.");
    return true;
}

// Test cases
const emails = [
    "user@example.com",
    "user.name+tag@sub.domain.com",
    "user@domain",
    "user@domain.c",
    "",
    null,
    " invalid @email.com"
];

emails.forEach((email, index) => {
    console.log(`Test case ${index + 1}:`, validateEmail(email));
});
Email is valid.
true
Email is valid.
true
Invalid email format.
false
Invalid email format.
false
Email is required.
false
Email is required.
false
Invalid email format.
false
