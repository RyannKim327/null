const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/;
function validateEmail(email) {
  const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/;
  
  return emailRegExp.test(email);
}

const email = "example@example.com";
if (validateEmail(email)) {
  console.log("Email address is valid");
} else {
  console.log("Email address is invalid");
}
