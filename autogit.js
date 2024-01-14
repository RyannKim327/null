const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Example usage:
console.log(validateEmail('test@example.com')); // true
console.log(validateEmail('invalid_email')); // false
