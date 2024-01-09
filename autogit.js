const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmail(email) {
  return emailRegex.test(email);
}
const email = 'example@example.com';
console.log(validateEmail(email)); // Output: true
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

const email = 'example@example.com';
console.log(validateEmail(email)); // Output: true
