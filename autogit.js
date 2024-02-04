function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}
console.log(validateEmail('example@example.com')); // true
console.log(validateEmail('some.email@example.co.uk')); // true
console.log(validateEmail('invalid.email')); // false
console.log(validateEmail('notanemail@com')); // false
