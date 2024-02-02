let fibM2 = 0;
let fibM1 = 1;

while (fibM1 < n) {
  const temp = fibM1;
  fibM1 = fibM1 + fibM2;
  fibM2 = temp;
}
let offset = -1;
let index = Math.min(fibM2, n - 1);
while (fibM2 > 1) {
  const i = Math.min(offset + fibM2, n - 1);

  if (arr[i] < target) {
    fibM1 = fibM2;
    fibM2 = fibM2 - fibM1;
    offset = i;
  } else if (arr[i] > target) {
    fibM2 = fibM2 - fibM1;
    fibM1 = fibM1 - fibM2;
  } else {
    return i; // Found the target element
  }
}
if (fibM1 === 1 && arr[offset + 1] === target) {
  return offset + 1;
} else {
  return -1;
}
function fibonacciSearch(arr, target, n) {
  let fibM2 = 0;
  let fibM1 = 1;

  while (fibM1 < n) {
    const temp = fibM1;
    fibM1 = fibM1 + fibM2;
    fibM2 = temp;
  }

  let offset = -1;
  let index = Math.min(fibM2, n - 1);

  while (fibM2 > 1) {
    const i = Math.min(offset + fibM2, n - 1);

    if (arr[i] < target) {
      fibM1 = fibM2;
      fibM2 = fibM2 - fibM1;
      offset = i;
    } else if (arr[i] > target) {
      fibM2 = fibM2 - fibM1;
      fibM1 = fibM1 - fibM2;
    } else {
      return i;
    }
  }
  
  if (fibM1 === 1 && arr[offset + 1] === target) {
    return offset + 1;
  } else {
    return -1;
  }
}
const arr = [1, 3, 5, 8, 13, 21, 34, 55];
const target = 13;

const index = fibonacciSearch(arr, target, arr.length);
console.log(index); // Output: 4 (index of the target element in the array)
