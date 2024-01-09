function countingSort(array) {
  // Find the maximum value in the array
  const max = Math.max(...array);

  // Create a frequency array to store the count of each element
  const count = Array(max + 1).fill(0);

  // Count the occurrences of each element
  array.forEach((num) => {
    count[num]++;
  });

  // Generate the sorted array
  const sortedArray = [];
  count.forEach((count, i) => {
    // Add each element count number of times to the sorted array
    for (let j = 0; j < count; j++) {
      sortedArray.push(i);
    }
  });

  return sortedArray;
}
const array = [4, 2, 10, 5, 1, 7];
const sortedArray = countingSort(array);
console.log(sortedArray);
