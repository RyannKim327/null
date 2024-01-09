function validateEmail(email) {
  // Regular expression pattern
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the pattern
  return pattern.test(email);
}

// Example usage
var email = "example@example.com";
console.log(validateEmail(email)); // Output: true
