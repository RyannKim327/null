function fibonacciSearch(array, searchElement, length) {
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;

  while (fibNMinus1 < length) {
    let fibonacciNumber = fibNMinus2 + fibNMinus1;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibonacciNumber;
  }

  let offset = -1;

  while (fibNMinus2 > 1) {
    let position = Math.min(offset + fibNMinus2, length - 1);

    if (array[position] === searchElement) {
      return position;
    } else if (array[position] < searchElement) {
      fibNMinus2 = fibNMinus1;
      fibNMinus1 -= fibNMinus2;
      offset = position;
    } else {
      fibNMinus1 -= fibNMinus2;
      fibNMinus2 -= fibNMinus1;
    }
  }

  if (fibNMinus1 === 1 && array[offset + 1] === searchElement) {
    return offset + 1;
  }

  return -1;
}
const array = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const searchElement = 13;
const length = array.length;

const result = fibonacciSearch(array, searchElement, length);
console.log(result);  // Output: 5
