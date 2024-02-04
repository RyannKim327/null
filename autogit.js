function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Usage example:
const email = 'test@example.com';
console.log(validateEmail(email)); // Output: true
