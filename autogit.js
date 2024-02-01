function findMajorityElement(array) {
  let counter = 0;
  let majorityElement = null;

  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    if (counter === 0) {
      // If the counter is zero, set the current element as the majority element
      majorityElement = array[i];
      counter = 1;
    } else if (majorityElement === array[i]) {
      // If the current element is the same as the majority element, increment the counter
      counter++;
    } else {
      // If the current element is different from the majority element, decrement the counter
      counter--;
    }
  }

  // Verify if the majority element is indeed the majority
  counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === majorityElement) {
      counter++;
    }
  }

  if (counter > array.length / 2) {
    // Return the majority element if it is indeed the majority
    return majorityElement;
  } else {
    // Return null if there is no majority element
    return null;
  }
}

// Example usage:
const arr = [1, 2, 2, 3, 2, 4, 2];
console.log(findMajorityElement(arr)); // Output: 2
