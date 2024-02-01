function validateEmail(email) {
  // Regular expression pattern for email validation
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Test the email against the pattern
  return pattern.test(email);
}

// Usage
const email = "test@example.com";
if (validateEmail(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
