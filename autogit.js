const validateEmail = (email) => {
  const emailPattern = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
  return emailPattern.test(email);
};
const email = "example@example.com";
console.log(validateEmail(email)); // Output: true
