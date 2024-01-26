function radixSort(arr) {
  const max = Math.max(...arr); // Step 2
  
  let digitPosition = 1;
  while (Math.floor(max / digitPosition) > 0) {
    arr = countingSort(arr, digitPosition, 10);
    digitPosition *= 10;
  }
  
  return arr;
}

function countingSort(arr, digitPosition, radix) {
  const count = Array(radix).fill(0); // Step 4
  
  for (let num of arr) {
    const digit = Math.floor((num / digitPosition) % radix); // Step 5
    count[digit]++;
  }
  
  for (let i = 1; i < radix; i++) {
    count[i] += count[i - 1]; // Step 6
  }
  
  const sorted = Array(arr.length); // Step 7
  
  for (let i = arr.length - 1; i >= 0; i--) { // Step 8
    const digit = Math.floor((arr[i] / digitPosition) % radix); // Step 9
    count[digit]--; // Step 10
    sorted[count[digit]] = arr[i]; // Step 11
  }
  
  return sorted; // Step 12
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);

console.log(sortedArr);
// Output: [2, 24, 45, 66, 75, 90, 170, 802]
