function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const testEmail1 = 'example@example.com';
console.log(validateEmail(testEmail1)); // true

const testEmail2 = 'notanemail';
console.log(validateEmail(testEmail2)); // false
