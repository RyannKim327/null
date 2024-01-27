function fibonacciSearch(arr, target) {
  // ...
}
function generateFibonacci(length) {
  const fibSequence = [0, 1]; // Initial sequence

  while (fibSequence[fibSequence.length - 1] < length) {
    const nextNum =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextNum);
  }

  return fibSequence;
}
const fibSequence = generateFibonacci(arr.length);
let fibCurrent = fibSequence[fibSequence.length - 1];
let fibPrev = fibSequence[fibSequence.length - 2];
let offset = -1;
let index;
while (fibCurrent > 1) {
  // Calculate the actual position
  index = Math.min(offset + fibPrev, arr.length - 1);

  // If the target value is less than the value at the current index, move two Fibonacci steps back
  if (arr[index] > target) {
    fibCurrent = fibPrev;
    fibPrev = fibSequence[fibSequence.indexOf(fibCurrent) - 1];
  }

  // If the target value is greater than the value at the current index, move three Fibonacci steps back
  else if (arr[index] < target) {
    fibCurrent = fibSequence[fibSequence.indexOf(fibCurrent) - 2];
    fibPrev = fibSequence[fibSequence.indexOf(fibCurrent) - 1];
    offset = index;
  }

  // If the target value is found, return the index
  else {
    return index;
  }
}
return -1;
function fibonacciSearch(arr, target) {
  function generateFibonacci(length) {
    const fibSequence = [0, 1];

    while (fibSequence[fibSequence.length - 1] < length) {
      const nextNum =
        fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
      fibSequence.push(nextNum);
    }

    return fibSequence;
  }

  const fibSequence = generateFibonacci(arr.length);

  let fibCurrent = fibSequence[fibSequence.length - 1];
  let fibPrev = fibSequence[fibSequence.length - 2];
  let offset = -1;
  let index;

  while (fibCurrent > 1) {
    index = Math.min(offset + fibPrev, arr.length - 1);

    if (arr[index] > target) {
      fibCurrent = fibPrev;
      fibPrev = fibSequence[fibSequence.indexOf(fibCurrent) - 1];
    } else if (arr[index] < target) {
      fibCurrent = fibSequence[fibSequence.indexOf(fibCurrent) - 2];
      fibPrev = fibSequence[fibSequence.indexOf(fibCurrent) - 1];
      offset = index;
    } else {
      return index; // Target value found
    }
  }

  return -1; // Target value not found
}
