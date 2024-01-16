function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Example usage
const email = 'example@email.com';
const isValidEmail = validateEmail(email);
console.log(isValidEmail); // true or false
