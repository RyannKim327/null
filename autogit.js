function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the regex pattern
  return emailRegex.test(email);
}

// Example usage
console.log(validateEmail('test@example.com')); // true
console.log(validateEmail('invalid_email')); // false
