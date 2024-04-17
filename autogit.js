function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// Test the function
console.log(validateEmail('test@example.com')); // Output: true
console.log(validateEmail('invalid_email')); // Output: false
