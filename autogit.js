function validateEmail(email) {
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegExp.test(email);
}

// Example
console.log(validateEmail('john.doe@example.com')); // Output: true
console.log(validateEmail('invalid-email.com'));     // Output: false
