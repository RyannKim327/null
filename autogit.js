function generateFibonacciSequence(limit) {
  const sequence = [0, 1];
  let current = 1;
  let prev = 0;
  
  while (current <= limit) {
    const next = current + prev;
    sequence.push(next);
    prev = current;
    current = next;
  }

  return sequence;
}
function fibonacciSearch(array, target) {
  const fibSeq = generateFibonacciSequence(array.length);
  
  let offset = -1;
  let index = fibSeq.length - 1;
  
  while (fibSeq[index] > 1) {
    const i = Math.min(offset + fibSeq[index - 2], array.length - 1);
    
    if (array[i] < target) {
      index -= 1;
      offset = i;
    } else if (array[i] > target) {
      index -= 2;
    } else {
      return i;
    }
  }
  
  if (offset !== array.length - 1 && array[offset + 1] === target) {
    return offset + 1;
  }
  
  return -1; // Target not found
}
const array = [1, 3, 5, 9, 13, 18, 24, 28, 35];
const target = 24;

const resultIndex = fibonacciSearch(array, target);
if (resultIndex !== -1) {
  console.log(`Found ${target} at index ${resultIndex}.`);
} else {
  console.log(`${target} not found in the array.`);
}
