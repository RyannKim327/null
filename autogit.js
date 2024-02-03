function validateEmail(email) {
  // Regular expression pattern for validating email addresses
  var regexPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  // Test the email against the pattern
  return regexPattern.test(email);
}

// Example usage
console.log(validateEmail('test@example.com')); // true
console.log(validateEmail('invalid')); // false
