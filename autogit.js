function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
const email = 'example@example.com';
console.log(validateEmail(email)); // Returns true if valid, false otherwise
