function fibonacciSearch(array, key, length) {
  // ...
}
function fibonacciSearch(array, key, length) {
  let fibNums = [0, 1];
  // ...
}
function fibonacciSearch(array, key, length) {
  let fibNums = [0, 1];

  while (fibNums[fibNums.length - 1] < length) {
    fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
  }
  // ...
}
function fibonacciSearch(array, key, length) {
  let fibNums = [0, 1];

  while (fibNums[fibNums.length - 1] < length) {
    fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
  }

  let fibIndex = -1;
  let k = fibNums.length - 1;
  while (fibNums[k] > length) {
    k--;
  }

  fibIndex = k;
  // ...
}
function fibonacciSearch(array, key, length) {
  // ...

  let offset = -1;
  let prev = 0;
  // ...
}
function fibonacciSearch(array, key, length) {
  // ...

  let offset = -1;
  let prev = 0;
  
  while (fibIndex > 1) {
    let i = Math.min(offset + fibNums[fibIndex - 2], length - 1);

    if (array[i] < key) {
      fibIndex -= 1;
      offset = i;
      prev = array[i];
    } else if (array[i] > key) {
      fibIndex -= 2;
    } else {
      return i; // Key found at index i
    }
  }
  // ...
}
function fibonacciSearch(array, key, length) {
  // ...

  let offset = -1;
  let prev = 0;

  while (fibIndex > 1) {
    let i = Math.min(offset + fibNums[fibIndex - 2], length - 1);

    if (array[i] < key) {
      fibIndex -= 1;
      offset = i;
      prev = array[i];
    } else if (array[i] > key) {
      fibIndex -= 2;
    } else {
      return i; // Key found at index i
    }
  }

  if (prev && array[offset + 1] === key) {
    return offset + 1;
  } else {
    return -1; // Key not found
  }
}
