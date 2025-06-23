local-part@domain
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function isValidEmail(email: string): boolean {
    return emailRegex.test(email);
}
// Example usage:
const testEmails: string[] = [
    "example@example.com",
    "user.name+tag+sorting@example.com",
    "user_name@example.co.uk",
    "invalid-email@.com",
    "another.invalid@com",
    "missingatexample.com",
    "@missinglocalpart.com"
];

testEmails.forEach(email => {
    console.log(`${email}: ${isValidEmail(email)}`);
});
example@example.com: true
user.name+tag+sorting@example.com: true
user_name@example.co.uk: true
invalid-email@.com: false
another.invalid@com: false
missingatexample.com: false
@missinglocalpart.com: false
// Define the regex pattern
const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Validation function
function isValidEmail(email: string): boolean {
    return emailRegex.test(email);
}

// Test suite
const testEmails: string[] = [
    "example@example.com",               // Valid
    "user.name+tag+sorting@example.com", // Valid
    "user_name@example.co.uk",           // Valid
    "invalid-email@.com",                // Invalid
    "another.invalid@com",               // Invalid
    "missingatexample.com",              // Invalid
    "@missinglocalpart.com"              // Invalid
];

// Output results
testEmails.forEach(email => {
    console.log(`${email}: ${isValidEmail(email)}`);
});
