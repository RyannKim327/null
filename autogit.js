function validateEmail(email) {
  // Regular expression pattern for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Return true if the email matches the pattern, otherwise false
  return regex.test(email);
}

// Example usage
const email = "example@example.com";
console.log(validateEmail(email)); // Output: true
