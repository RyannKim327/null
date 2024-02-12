function validateEmail(email) {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
}

// Example usage
const email = "example@example.com";
const isValid = validateEmail(email);
console.log(isValid); // Output: true or false
