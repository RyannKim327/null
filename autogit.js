function countingSort(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max - min + 1;
  let count = Array(range).fill(0);
  let output = [];
  
  arr.forEach(num => {
    count[num - min]++;
  });
  
  count.forEach((count, i) => {
    while (count > 0) {
      output.push(i + min);
      count--;
    }
  });
  
  return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]
