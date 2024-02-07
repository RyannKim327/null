function validateEmail(email) {
  const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexPattern.test(email);
}
const email = "example@email.com";
const isValid = validateEmail(email);
console.log(isValid); // Output: true
