function validateEmail(email) {
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);
}

// Example usage
console.log(validateEmail('example@email.com'));  // true
console.log(validateEmail('invalid-email'));      // false
