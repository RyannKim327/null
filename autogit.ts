const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
}
console.log(isValidEmail('test@example.com')); // true
console.log(isValidEmail('invalid@com')); // false
