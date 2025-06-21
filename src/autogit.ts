^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$
function validateEmailSimple(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Usage examples:
console.log(validateEmailSimple("example@example.com")); // true
console.log(validateEmailSimple("user.name+tag+sorting@example.co.uk")); // true
console.log(validateEmailSimple("invalid-email@.com")); // false
function validateEmailComprehensive(email: string): boolean {
    const regex = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Usage examples:
console.log(validateEmailComprehensive("example@example.com")); // true
console.log(validateEmailComprehensive("user.name+tag+sorting@example.co.uk")); // true
console.log(validateEmailComprehensive("invalid-email@.com")); // false
console.log(validateEmailComprehensive("very.long.email.address.that.exceeds.the.maximum.length.allowed.by.the.regex@domain.com")); // false
const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
<input type="email" id="emailInput" />
const input = document.getElementById('emailInput') as HTMLInputElement;

if (input.checkValidity()) {
    console.log('HTML5 validation passed.');
    if (validateEmailSimple(input.value)) {
        console.log('Regex validation passed.');
    } else {
        console.log('Invalid email according to regex.');
    }
} else {
    console.log('Invalid email according to HTML5 validation.');
}
function validateEmail(email: string): boolean {
    const regex = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Example usage:
const testEmails = [
    "example@example.com",
    "user.name+tag+sorting@example.co.uk",
    "invalid-email@.com",
    "very.long.email.address.that.exceeds.the.maximum.length.allowed.by.the.regex@domain.com"
];

testEmails.forEach(email => {
    console.log(`${email}: ${validateEmail(email)}`);
});
example@example.com: true
user.name+tag+sorting@example.co.uk: true
invalid-email@.com: false
very.long.email.address.that.exceeds.the.maximum.length.allowed.by.the.regex@domain.com: false
