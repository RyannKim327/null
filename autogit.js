function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
const email = 'example@example.com';
console.log(validateEmail(email)); // true
