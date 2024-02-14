function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Return true if the email matches the regex, false otherwise
  return emailRegex.test(email);
}

// Usage Example:
const email = "test@example.com";
if (validateEmail(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
