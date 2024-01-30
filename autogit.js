function generateFibonacciSequence(limit) {
  const sequence = [0, 1];
  
  while (sequence[sequence.length - 1] < limit) {
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }
  
  return sequence;
}
function fibonacciSearch(array, target) {
  const fibonacciSeq = generateFibonacciSequence(array.length);
  let fib2 = fibonacciSeq[fibonacciSeq.length - 2];
  let fib1 = fibonacciSeq[fibonacciSeq.length - 3];
  let offset = -1;

  while (fib2 > 1) {
    const index = Math.min(offset + fib1, array.length - 1);

    if (array[index] < target) {
      fib2 = fib1;
      fib1 = fibonacciSeq[fibonacciSeq.indexOf(fib2) - 1];
      offset = index;
    } else if (array[index] > target) {
      fib2 = fib2 - fib1;
      fib1 = fib1 - fib2;
    } else {
      return index;
    }
  }

  if (fib1 && array[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const index = fibonacciSearch(array, target);

console.log(`Target ${target} found at index ${index}`);
