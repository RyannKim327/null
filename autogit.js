function generateFibonacciSequence(n) {
  let sequence = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  
  return sequence;
}
function fibonacciSearch(arr, key) {
  let n = arr.length;
  let fibSequence = generateFibonacciSequence(n);
  let offset = -1;

  while (fibSequence[n - 1] > 1) {
    let i = Math.min(offset + fibSequence[n - 2], n - 1);

    if (arr[i] < key) {
      n = n - 2;
      offset = i;
    } else if (arr[i] > key) {
      n = n - 1;
    } else {
      return i;
    }
  }

  if (fibSequence[n - 1] === 1 && arr[offset + 1] === key) {
    return offset + 1;
  }

  return -1;
}
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let key = 12;

let index = fibonacciSearch(arr, key);

if (index !== -1) {
  console.log(`Element ${key} found at index ${index}.`);
} else {
  console.log(`Element ${key} not found.`);
}
