const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = emailPattern.test(email);
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

const email = "example@example.com";
const isValidEmail = validateEmail(email);

if (isValidEmail) {
  console.log("Email is valid.");
} else {
  console.log("Email is invalid.");
}
