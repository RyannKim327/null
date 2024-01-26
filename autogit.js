function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function radixSort(arr) {
  const max = findMax(arr);
  let exp = 1; // exponent value for the current digit

  while (Math.floor(max / exp) > 0) {
    // Create buckets
    const buckets = Array.from({ length: 10 }, () => []);

    // Place elements in corresponding buckets
    for (let i = 0; i < arr.length; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      buckets[digit].push(arr[i]);
    }

    // Flatten the buckets back into the original array
    arr = [].concat(...buckets);

    // Move to the next digit
    exp *= 10;
  }

  return arr;
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));
