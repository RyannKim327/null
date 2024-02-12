function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Example usage
const email = 'example@example.com';
if (validateEmail(email)) {
  console.log('Valid email');
} else {
  console.log('Invalid email');
}
