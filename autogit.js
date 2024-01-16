function validateEmail(email) {
  // Regular expression pattern for email validation
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the pattern
  return pattern.test(email);
}

// Example usage
var email = "example@example.com";
var isValid = validateEmail(email);
console.log(isValid); // Output: true
