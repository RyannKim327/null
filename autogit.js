function validateEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailPattern.test(email);
}

// Example usage
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalidemail@example")); // false
