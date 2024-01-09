function generateFibonacciArray(n) {
  let fibSeq = [0, 1];
  let i = 2;
  
  while (fibSeq[i - 1] < n) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    i++;
  }
  
  return fibSeq;
}
function fibonacciSearch(arr, target) {
  let fibSeq = generateFibonacciArray(arr.length);
  let offset = -1;

  while (fibSeq.length > 2) {
    const fibIndex = fibSeq.length - 3;
    const mid = offset + fibSeq[fibIndex];

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      fibSeq.splice(fibIndex + 1);
    } else {
      fibSeq.splice(fibIndex, 1);
      offset = mid;
    }
  }

  if (fibSeq[0] === target && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}
const numbers = [1, 5, 8, 12, 20, 28, 30, 42, 50];
const target = 30;

const index = fibonacciSearch(numbers, target);
if (index !== -1) {
  console.log(`Element ${target} found at index ${index}.`);
} else {
  console.log(`Element ${target} not found in the array.`);
}
