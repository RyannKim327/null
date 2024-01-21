function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return secondMax;
}

// Example usage:
const array = [4, 9, 2, 5, 1, 6, 8];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8
