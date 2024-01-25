function validateEmail(email) {
  // Regular expression pattern to validate email addresses
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test if the email matches the pattern
  return emailPattern.test(email);
}

// Example usage
var email = "test@example.com";
console.log(validateEmail(email));

