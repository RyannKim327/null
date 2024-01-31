function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Example usage
const email = "example@example.com";
if (validateEmail(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
