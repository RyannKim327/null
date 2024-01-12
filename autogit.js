function generateFibonacciSequence(n) {
  const sequence = [0, 1];
  while (sequence[sequence.length - 1] < n) {
    const len = sequence.length;
    const next = sequence[len - 1] + sequence[len - 2];
    sequence.push(next);
  }
  return sequence;
}
function fibonacciSearch(arr, target, fibSequence) {
  let fib1 = fib1Index(fibSequence, arr.length);
  let fib2 = fib2Index(fibSequence, arr.length);
  let offset = -1;

  while (fib1 > 1) {
    const i = Math.min(offset + fibSequence[fib1 - 2], arr.length - 1);

    if (arr[i] < target) {
      fib1 = fib2;
      fib2 = fibSequence[fib1 - 1] - fibSequence[fib1 - 2];
      offset = i;
    } else if (arr[i] > target) {
      fib1 = fib1 - fib2;
      fib2 = fib2 - fib1;
    } else {
      return i;
    }
  }

  if (fib2 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}
function fib1Index(sequence, n) {
  let i = 0;
  while (sequence[i] <= n) {
    i++;
  }
  return i - 1;
}

function fib2Index(sequence, n) {
  let i = 0;
  while (sequence[i] <= n) {
    i++;
  }
  return i - 2;
}
const arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const target = 13;
const fibSequence = generateFibonacciSequence(arr.length);

const index = fibonacciSearch(arr, target, fibSequence);
if (index !== -1) {
  console.log(`Element found at index ${index}`);
} else {
  console.log("Element not found");
}
