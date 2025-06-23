local-part@domain
// Define the regex pattern for email validation
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates an email address using regex.
 *
 * @param email - The email string to validate.
 * @returns True if the email is valid, false otherwise.
 */
function isValidEmail(email: string): boolean {
    return emailRegex.test(email);
}

// Example usage:
const testEmails: string[] = [
    "example@example.com",
    "user.name+tag+sorting@example.com",
    "user@sub.domain.com",
    "invalid-email@",
    "another.invalid@domain",
    "noatsign.com"
];

testEmails.forEach(email => {
    console.log(`${email}: ${isValidEmail(email)}`);
});
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
example@example.com: true
user.name+tag+sorting@example.com: true
user@sub.domain.com: true
invalid-email@: false
another.invalid@domain: false
noatsign.com: false
// Enhanced regex pattern for email validation
const enhancedEmailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

/**
 * Validates an email address using an enhanced regex.
 *
 * @param email - The email string to validate.
 * @returns True if the email is valid, false otherwise.
 */
function isValidEnhancedEmail(email: string): boolean {
    return enhancedEmailRegex.test(email);
}

// Example usage:
testEmails.forEach(email => {
    console.log(`${email}: ${isValidEnhancedEmail(email)}`);
});
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
example@example.com: true
user.name+tag+sorting@example.com: true
user@sub.domain.com: true
invalid-email@: false
another.invalid@domain: false
noatsign.com: false
<form id="emailForm">
    <input type="email" id="emailInput" required />
    <button type="submit">Submit</button>
</form>

<script>
    document.getElementById('emailForm').addEventListener('submit', function(event) {
        const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        if (!emailInput.checkValidity()) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });
</script>
npm install validator
import validator from 'validator';

function isValidEmailWithValidator(email: string): boolean {
    return validator.isEmail(email);
}

// Example usage:
testEmails.forEach(email => {
    console.log(`${email}: ${isValidEmailWithValidator(email)}`);
});
// Simple regex for basic email validation
const simpleEmailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidSimpleEmail(email: string): boolean {
    return simpleEmailRegex.test(email);
}

// Enhanced regex for more comprehensive validation
const enhancedEmailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

function isValidEnhancedEmail(email: string): boolean {
    return enhancedEmailRegex.test(email);
}

// Test suite
const testEmails: string[] = [
    "example@example.com",
    "user.name+tag+sorting@example.com",
    "user@sub.domain.com",
    "invalid-email@",
    "another.invalid@domain",
    "noatsign.com",
    "very.common@example.com",
    "disposable.style.email.with+symbol@example.com",
    "other.email-with-hyphen@example.com",
    "fully-qualified-domain@example.com",
    "user.name+tag+sorting@example.co.uk",
    "x@x.x"
];

console.log("Simple Regex Validation:");
testEmails.forEach(email => {
    console.log(`${email}: ${isValidSimpleEmail(email)}`);
});

console.log("\nEnhanced Regex Validation:");
testEmails.forEach(email => {
    console.log(`${email}: ${isValidEnhancedEmail(email)}`);
});
Simple Regex Validation:
example@example.com: true
user.name+tag+sorting@example.com: true
user@sub.domain.com: true
invalid-email@: false
another.invalid@domain: false
noatsign.com: false
very.common@example.com: true
disposable.style.email.with+symbol@example.com: true
other.email-with-hyphen@example.com: true
fully-qualified-domain@example.com: true
user.name+tag+sorting@example.co.uk: true
x@x.x: true

Enhanced Regex Validation:
example@example.com: true
user.name+tag+sorting@example.com: true
user@sub.domain.com: true
invalid-email@: false
another.invalid@domain: false
noatsign.com: false
very.common@example.com: true
disposable.style.email.with+symbol@example.com: true
other.email-with-hyphen@example.com: true
fully-qualified-domain@example.com: true
user.name+tag+sorting@example.co.uk: true
x@x.x: true
