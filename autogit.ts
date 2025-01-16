const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email: string): boolean {
  return emailRegex.test(email);
}
const email = "example@example.com";
if (validateEmail(email)) {
  console.log("Email is valid");
} else {
  console.log("Email is not valid");
}
