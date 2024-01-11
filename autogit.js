function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
const email = 'example@email.com';
const isValid = validateEmail(email);
console.log(isValid);  // Output: true
