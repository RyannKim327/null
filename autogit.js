function validateEmail(email) {
  // Regular expression pattern for email validation
  var regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the regex pattern
  return regexPattern.test(email);
}

// Usage example:
var email = "test@example.com";
console.log(validateEmail(email)); // Output: true

email = "invalid_email";
console.log(validateEmail(email)); // Output: false
