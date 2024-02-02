function radixSort(arr) {
  const max = Math.max(...arr);
  const maxDigitCount = Math.floor(Math.log10(max) + 1);

  for (let digit = 0; digit < maxDigitCount; digit++) {
    countingSort(arr, digit);
  }

  return arr;
}

function countingSort(arr, digit) {
  const count = Array(10).fill(0);
  const output = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    const digitValue = getDigitValue(arr[i], digit);
    count[digitValue]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const digitValue = getDigitValue(arr[i], digit);
    output[count[digitValue] - 1] = arr[i];
    count[digitValue]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

function getDigitValue(num, digit) {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}
const array = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(array);
console.log(sortedArray);
