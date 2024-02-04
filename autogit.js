function validateEmail(email) {
  // Regular expression pattern for validating email address
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Return true if the email matches the pattern, false otherwise
  return pattern.test(email);
}

// Example usage
console.log(validateEmail('test@example.com')); // true
console.log(validateEmail('invalid.email')); // false
