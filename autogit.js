function validateEmail(email) {
  // Regular expression pattern for validating email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the pattern
  return emailPattern.test(email);
}

// Usage:
var email = "example@example.com";
var isValid = validateEmail(email);
console.log("Is the email valid? " + isValid);
