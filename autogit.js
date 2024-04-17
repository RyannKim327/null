function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

const email = 'example@example.com';
if (validateEmail(email)) {
  console.log('Email is valid');
} else {
  console.log('Email is invalid');
}
