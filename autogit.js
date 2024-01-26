function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

const email1 = "example@mail.com";
const email2 = "invalid.email@domain";
console.log(validateEmail(email1)); // Output: true
console.log(validateEmail(email2)); // Output: false
