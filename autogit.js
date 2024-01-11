function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(email)) {
    return true; // Email is valid
  }
  
  return false; // Email is invalid
}

// Usage
const email = 'test@example.com';

if (validateEmail(email)) {
  console.log('Valid email');
} else {
  console.log('Invalid email');
}
