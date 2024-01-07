function validateEmail(email) {
  // Regular expression pattern for email validation
  const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  
  // Test the email against the pattern
  return pattern.test(email);
}
