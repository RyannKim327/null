function generateFibonacci(n) {
  const fibArr = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  
  return fibArr;
}
function fibonacciSearch(arr, target) {
  let fibMMinus2 = 0;
  let fibMMinus1 = 1;
  let fibM = fibMMinus1 + fibMMinus2;
  
  while (fibM < arr.length) {
    fibMMinus2 = fibMMinus1;
    fibMMinus1 = fibM;
    fibM = fibMMinus1 + fibMMinus2;
  }
  
  let offset = -1;

  while (fibM > 1) {
    const i = Math.min(offset + fibMMinus2, arr.length - 1);
    
    if (arr[i] < target) {
      fibM = fibMMinus1;
      fibMMinus1 = fibMMinus2;
      fibMMinus2 = fibM - fibMMinus1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibMMinus2;
      fibMMinus1 = fibMMinus1 - fibMMinus2;
      fibMMinus2 = fibM - fibMMinus1;
    } else {
      return i;
    }
  }

  if (fibMMinus1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

console.log(fibonacciSearch(arr, target)); // Output: 5
