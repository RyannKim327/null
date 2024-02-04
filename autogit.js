
function findMajorityElement(arr) {
  let majorityElement = null;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      majorityElement = arr[i];
      count = 1;
    } else {
      if (arr[i] === majorityElement) {
        count++;
      } else {
        count--;
      }
    }
  }

  // Verify if the majority element is indeed the majority
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === majorityElement) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return majorityElement;
  } else {
    return "No majority element found.";
  }
}

// Example usage:
const arr = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 2

