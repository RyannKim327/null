function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("bad-email@.com"));   // false
function validateEmailAdvanced(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return emailRegex.test(email);
}
