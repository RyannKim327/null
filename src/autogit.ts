local-part@domain
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
// Define the regex pattern for email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validates whether a given string is a correctly formatted email address.
 * 
 * @param email - The email string to validate.
 * @returns True if the email is valid; otherwise, false.
 */
function isValidEmail(email: string): boolean {
  // Trim the email to remove leading/trailing whitespace
  const trimmedEmail = email.trim();
  
  // Test the email against the regex pattern
  return emailRegex.test(trimmedEmail);
}

// Example usage:
const testEmails = [
  "test@example.com",
  "user.name+tag+sorting@example.co.uk",
  "invalid-email@.com",
  "missingat.com",
  "user@sub.domain.org"
];

testEmails.forEach(email => {
  console.log(`"${email}" is valid? ${isValidEmail(email)}`);
});
"test@example.com" is valid? true
"user.name+tag+sorting@example.co.uk" is valid? true
"invalid-email@.com" is valid? false
"missingat.com" is valid? false
"user@sub.domain.org" is valid? true
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
<input type="email" required />
