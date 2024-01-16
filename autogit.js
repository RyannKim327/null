function validateEmail(email) {
  // Regular expression pattern for email validation
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the pattern
  return pattern.test(email);
}

// Example usage
const email = 'example@email.com';
const isValid = validateEmail(email);
console.log(isValid);
