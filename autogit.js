function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Example usage
console.log(validateEmail('john.doe@example.com')); // true
console.log(validateEmail('invalid_email')); // false
