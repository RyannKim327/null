function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
const email = "test@example.com";
const isValidEmail = validateEmail(email);
console.log(isValidEmail); // Output: true
