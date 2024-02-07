function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
const email = "example@example.com";
console.log(validateEmail(email)); // Output: true
