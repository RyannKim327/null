function validateEmail(email) {
  // Regular expression pattern for email validation
  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Return true if the email matches the pattern, false otherwise
  return pattern.test(email);
}
console.log(validateEmail("test@example.com")); // Output: true
console.log(validateEmail("invalid_email")); // Output: false
console.log(validateEmail("another@test")); // Output: false
