const str = "123";
const num = parseInt(str, 10); // second argument is the radix/base, 10 for decimal
console.log(num); // 123
const str = "123";
const num = +str;
console.log(num); // 123
const str = "123";
const num = Number(str);
console.log(num); // 123
const str = "abc";
const num = parseInt(str, 10);
if (isNaN(num)) {
  console.log("Not a valid number");
}
