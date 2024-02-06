function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
const email = "example@example.com";
const isValid = validateEmail(email);
console.log(isValid); // Output: true
