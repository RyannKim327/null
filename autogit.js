function validateEmail(email) {
  // Regular expression for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the email against the regular expression
  return regex.test(email);
}

// Usage example
const inputEmail = "test@example.com";
if (validateEmail(inputEmail)) {
  console.log("Email is valid");
} else {
  console.log("Email is not valid");
}
