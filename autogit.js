function validateEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Use the test() method to check if the email matches the pattern
  return emailPattern.test(email);
}

// Example usage:
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid.email@")); // false
