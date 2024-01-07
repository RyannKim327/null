function isValidEmail(email) {
  // Regular expression pattern
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the pattern
  return pattern.test(email);
}
var email = "test@example.com";
console.log(isValidEmail(email)); // Output: true

email = "invalid_email";
console.log(isValidEmail(email)); // Output: false
