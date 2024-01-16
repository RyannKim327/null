function validateEmail(email) {
  // Regular expression for email validation
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the regular expression
  return re.test(email);
}

// Usage:
var email = "example@example.com";
if (validateEmail(email)) {
  console.log("Email is valid");
} else {
  console.log("Email is invalid");
}
