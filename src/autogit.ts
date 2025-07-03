const str = "abc";
const num = parseInt(str, 10);
if (isNaN(num)) {
  // handle invalid number
  console.error("Invalid number");
} else {
  console.log(num);
}
