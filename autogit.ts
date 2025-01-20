function fibonacciSearch(arr: number[], target: number): number {
  let n = arr.length;
  let fibMMm2 = 0; /* (m-2)'th Fibonacci No.*/
  let fibMMm1 = 1; /* (m-1)'th Fibonacci No.*/
  let fibM = fibMMm2 + fibMMm1; /* m'th Fibonacci */

  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  let offset = -1;

  while (fibM > 1) {
    let i = Math.min(offset + fibMMm2, n - 1);

    if (arr[i] < target) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else {
      return i;
    }
  }

  if (fibMMm1 && arr[offset + 1] === target) return offset + 1;

  return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const index = fibonacciSearch(arr, target);
console.log(index); // Output: 4
