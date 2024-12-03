const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Example usage
const email = 'example@email.com';
if (validateEmail(email)) {
  console.log('Valid email address');
} else {
  console.log('Invalid email address');
}
