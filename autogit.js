const maxNum = Math.max(...array);
const numDigits = Math.floor(Math.log10(maxNum)) + 1;
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
for (let digit = 0; digit < numDigits; digit++) {
  // inner loop and sorting logic go here
}
const buckets = Array.from({ length: 10 }, () => []);
for (let i = 0; i < array.length; i++) {
  const digit = getDigit(array[i], digit);
  buckets[digit].push(array[i]);
}
array = buckets.flat();
function radixSort(array) {
  const maxNum = Math.max(...array);
  const numDigits = Math.floor(Math.log10(maxNum)) + 1;

  function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }

  for (let digit = 0; digit < numDigits; digit++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < array.length; i++) {
      const digitValue = getDigit(array[i], digit);
      buckets[digitValue].push(array[i]);
    }

    array = buckets.flat();
  }

  return array;
}
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray);
