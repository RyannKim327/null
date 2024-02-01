function validateEmail(email) {
  const regexPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regexPattern.test(email);
}
const email = "example@email.com";
if (validateEmail(email)) {
  console.log("Email is valid");
} else {
  console.log("Email is invalid");
}
