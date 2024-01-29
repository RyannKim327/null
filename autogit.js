function validateEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Returns true if the email matches the pattern; otherwise, false
  return emailPattern.test(email);
}
const email = "test@example.com";
console.log(validateEmail(email)); // Output: true
