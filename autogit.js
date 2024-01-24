function findMajorityElement(arr) {
  let count = 0;
  let majorityElement;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      majorityElement = arr[i];
      count++;
    } else if (arr[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  if (count > 0) {
    // Validating if the majority element occurs more than n/2 times
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === majorityElement) {
        count++;
      }
    }
    if (count > arr.length / 2) {
      return majorityElement;
    }
  }

  return -1; // No majority element found
}
const arr = [2, 4, 3, 4, 4, 2, 4]; // array with a majority element

const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 4
