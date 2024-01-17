function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Usage
const email = "example@test.com";
const isValid = validateEmail(email);
console.log(isValid); // Output: true or false
