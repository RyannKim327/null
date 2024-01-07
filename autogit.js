function validateEmail(email) {
  // Regular expression pattern for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the regex pattern
  return emailRegex.test(email);
}

// Usage
const email = "example@example.com";
const isValid = validateEmail(email);
console.log(isValid); // Outputs: true or false
