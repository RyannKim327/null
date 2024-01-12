function validateEmail(email) {
  // Regular expression pattern for validating email addresses
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return pattern.test(email);
}

// Example usage
var email = "example@example.com";
var isValid = validateEmail(email);

console.log(isValid); // true
