function findMajorityElement(arr) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if the candidate is the majority element
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > Math.floor(arr.length / 2)) {
    return candidate;
  } else {
    return "No majority element found";
  }
}
const array = [2, 4, 5, 2, 2, 3, 2, 2, 6, 2, 2]; // Majority element = 2
const majorityElement = findMajorityElement(array);
console.log(majorityElement); // Output: 2
