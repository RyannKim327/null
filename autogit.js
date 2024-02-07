function validateEmail(email) {
  // Regular expression pattern for validating email addresses
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Return true if the email matches the pattern, otherwise false
  return pattern.test(email);
}

// Example usage
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalidemail")); // false
