function generateFibonacci(limit) {
  const fibonacci = [0, 1];
  let i = 2;
  
  while (fibonacci[i - 1] < limit) {
    const nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(nextNumber);
    i++;
  }
  
  return fibonacci;
}
function fibonacciSearch(array, target) {
  const fibonacci = generateFibonacci(array.length);
  let offset = -1;
  let i = fibonacci.length - 1;
  
  while (i > 1) {
    const index = Math.min(offset + fibonacci[i - 2], array.length - 1);
    
    if (array[index] === target) {
      return index;
    } else if (array[index] < target) {
      i--;
      offset = index;
    } else {
      i -= 2;
    }
  }
  
  return -1;
}
const array = [2, 3, 5, 8, 13, 21, 34, 55, 89];
const target = 13;
const index = fibonacciSearch(array, target);

console.log(`Target ${target} found at index ${index}`);
