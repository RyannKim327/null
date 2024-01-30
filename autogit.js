function validateEmail(email) {
  // Regular expression pattern for email validation
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the pattern
  return regex.test(email);
}

// Example usage
var email = "example@example.com";
var isValid = validateEmail(email);
console.log(isValid); // true
