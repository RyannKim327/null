const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("test@sub.example.co.uk")); // true
console.log(isValidEmail("bademail@@example.com")); // false
console.log(isValidEmail("missing-at-sign.com")); // false
