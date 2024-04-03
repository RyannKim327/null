function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Example usage
const email = "example@example.com";
if (validateEmail(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
