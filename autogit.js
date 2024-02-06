function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

// Usage example
const email = 'test@example.com';
console.log(validateEmail(email));  // Output: true
