function radixSort(array) {
  // Step 1: Find the maximum number in the array
  const max = Math.max(...array);

  // Step 3: Loop through each digit position
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    // Step 4: Create ten empty buckets
    const buckets = Array.from({ length: 10 }, () => []);

    // Step 5: Distribute numbers into buckets
    for (let i = 0; i < array.length; i++) {
      const digit = Math.floor(array[i] / exp) % 10;
      buckets[digit].push(array[i]);
    }

    // Step 6: Concatenate all the buckets
    array = buckets.flat();
  }

  // Step 8: Return the sorted array
  return array;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray);
