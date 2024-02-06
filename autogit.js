function factorial(number) {
  let result = 1;
  
  for(let i = 2; i <= number; i++) {
    result *= i;
  }
  
  return result;
}

console.log(factorial(5)); // Output: 120
function factorial(number) {
  if(number <= 1) {
    return 1;
  }
  
  return number * factorial(number - 1);
}

console.log(factorial(5)); // Output: 120
