function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
const email = 'test@example.com';
if (validateEmail(email)) {
  console.log('Email is valid');
} else {
  console.log('Email is invalid');
}
