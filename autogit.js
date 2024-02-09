const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateEmail(email) {
  return emailRegex.test(email);
}

// Example usage:
const isValidEmail = validateEmail("test@example.com");
console.log(isValidEmail); // true
