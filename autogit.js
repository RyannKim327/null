function validateEmail(email) {
  const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  return regex.test(email);
}
const email = "example@email.com";
console.log(validateEmail(email)); // Output: true
