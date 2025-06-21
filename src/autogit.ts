const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function isValidEmail(email: string): boolean {
    return emailRegex.test(email);
}
// Example usage:
const testEmails = [
    "example@example.com",
    "user.name+tag+sorting@example.com",
    "user_name@example.co.uk",
    "invalid-email@.com",
    "another.invalid@domain",
    "missingat.com",
];

testEmails.forEach(email => {
    const isValid = isValidEmail(email);
    console.log(`${email}: ${isValid}`);
});
example@example.com: true
user.name+tag+sorting@example.com: true
user_name@example.co.uk: true
invalid-email@.com: false
another.invalid@domain: false
missingat.com: false
const unicodeEmailRegex: RegExp = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9\u0080-\uFFFF-]+\.)+[A-Za-z\u0080-\uFFFF]{2,}$/;

function isValidUnicodeEmail(email: string): boolean {
    return unicodeEmailRegex.test(email);
}
function validateEmail(input: unknown): input is string {
    if (typeof input !== 'string') return false;
    return emailRegex.test(input);
}

// Usage
const userInput: unknown = "test@example.com";
if (validateEmail(userInput)) {
    console.log("Valid email:", userInput);
} else {
    console.log("Invalid email.");
}
// emailValidator.ts

export class EmailValidator {
    private static readonly emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    /**
     * Validates if the provided string is a valid email address.
     * @param email - The email string to validate.
     * @returns True if the email is valid; otherwise, false.
     */
    public static isValid(email: string): boolean {
        return this.emailRegex.test(email);
    }

    /**
     * Validates multiple email addresses.
     * @param emails - An array of email strings to validate.
     * @returns An object with separate arrays for valid and invalid emails.
     */
    public static validateMultiple(emails: string[]): { valid: string[], invalid: string[] } {
        const valid: string[] = [];
        const invalid: string[] = [];

        emails.forEach(email => {
            if (this.isValid(email)) {
                valid.push(email);
            } else {
                invalid.push(email);
            }
        });

        return { valid, invalid };
    }
}

// Example usage:
const emailsToTest = [
    "good@example.com",
    "bad-email@com",
    "another.good@example.co.uk",
    "invalid@@example..com"
];

const results = EmailValidator.validateMultiple(emailsToTest);

console.log("Valid Emails:", results.valid);
console.log("Invalid Emails:", results.invalid);
Valid Emails: [ 'good@example.com', 'another.good@example.co.uk' ]
Invalid Emails: [ 'bad-email@com', 'invalid@@example..com' ]
