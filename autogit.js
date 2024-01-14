function validateEmail(email) {
  // Email pattern
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the pattern
  return emailPattern.test(email);
}
var email = "example@example.com";
var isValid = validateEmail(email);
console.log(isValid); // Outputs: true or false
