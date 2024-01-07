function validateEmail(email) {
  // Regular expression pattern for email validation
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the provided email matches the pattern
  return pattern.test(email);
}

// Example usage:
const email = 'example@example.com';
console.log(validateEmail(email)); // Output: true
