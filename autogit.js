function fibonacciSeries(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  let fibSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  return fibSeries;
}
function findFibonacciIndex(n) {
  if (n <= 0) return -1;
  if (n === 1) return 0;

  let fibSeries = fibonacciSeries(n);
  let m = 0;
  while (fibSeries[m] < n) {
    m++;
  }
  return m;
}
function fibonacciSearch(arr, x, n) {
  let fibM = findFibonacciIndex(n);
  
  let offset = -1;
  while (fibM > 1) {
    let i = Math.min(offset + fibonacciSeries(fibM - 2), n - 1);
    
    if (arr[i] < x) {
      fibM = fibM - 1;
      offset = i;
    } else if (arr[i] > x) {
      fibM = fibM - 2;
    } else {
      return i;
    }
  }
  
  if (fibM === 1 && arr[offset + 1] === x) {
    return offset + 1;
  }
  
  return -1;
}
let arr = [1, 5, 10, 15, 20, 25, 30];
let x = 25;
let n = arr.length;

let result = fibonacciSearch(arr, x, n);
console.log(`Element ${x} is found at index ${result}.`);
Element 25 is found at index 5.
