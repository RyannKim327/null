function generateFibonacciSequence(limit) {
  const sequence = [0, 1];
  let i = 1;

  while (sequence[i] < limit) {
    const nextValue = sequence[i] + sequence[i - 1];
    sequence.push(nextValue);
    i++;
  }

  return sequence;
}
function fibonacciSearch(arr, target) {
  const n = arr.length;

  // Generate the Fibonacci sequence
  const fibSeq = generateFibonacciSequence(n);

  // Initialize the variables
  let offset = -1;
  let fibIdx = fibSeq.length - 1;

  while (fibIdx > 1) {
    // Check if fibIdx is a valid index
    const index = Math.min(offset + fibSeq[fibIdx - 2], n - 1);

    // If the target value is less than the element at the current index,
    // move fibonacci index two steps down
    if (arr[index] > target) {
      fibIdx -= 2;
    }
    // If the target value is greater than the element at the current index,
    // move fibonacci index one step down and update the offset
    else if (arr[index] < target) {
      fibIdx -= 1;
      offset = index;
    }
    // If the target value is found at the current index, return the index
    else {
      return index;
    }
  }

  // If the target value is present in the array, it will be at the offset+1 position
  // Return -1 if the target value is not found
  return arr[offset + 1] === target ? offset + 1 : -1;
}
const arr = [2, 5, 8, 13, 21, 34, 55, 89];
const target = 13;

console.log(fibonacciSearch(arr, target)); // Output: 3 (index of target value)
