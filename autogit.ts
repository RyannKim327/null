function fibonacciSearch<T>(arr: T[], target: T, compare: (a: T, b: T) => number): number {
  const n = arr.length;

  // Initialize Fibonacci numbers
  let fibMMm2 = 0; // (m-2)'th Fibonacci number
  let fibMMm1 = 1; // (m-1)'th Fibonacci number
  let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci number

  // fibM is the smallest Fibonacci number greater or equal to n
  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm1 + fibMMm2;
  }

  // Marks the eliminated range from front
  let offset = -1;

  /* While there are elements to be inspected. Note that
     we compare arr[fibMMm2] with target. When fibM becomes 1,
     fibMMm1 becomes 1 and fibMMm2 becomes 0 */
  while (fibM > 1) {
    // Check if fibMMm2 is a valid location
    let i = Math.min(offset + fibMMm2, n - 1);

    const cmp = compare(arr[i], target);

    if (cmp < 0) {
      // Move the three Fibonacci variables down by one
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (cmp > 0) {
      // Move the Fibonacci variables down by two
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else {
      return i; // Found target
    }
  }

  // Comparing the last element with target
  if (fibMMm1 && offset + 1 < n && compare(arr[offset + 1], target) === 0) {
    return offset + 1;
  }

  // Not found
  return -1;
}
const arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
const target = 85;

// Comparator function for numbers
const compareNumbers = (a: number, b: number) => a - b;

const index = fibonacciSearch(arr, target, compareNumbers);
console.log(index);  // Output: 8 (the index of 85)
