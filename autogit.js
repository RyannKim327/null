function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Example usage:
const email = 'test@example.com';
console.log(validateEmail(email)); // Output: true
