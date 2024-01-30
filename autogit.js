function findMajorityElement(array) {
  let majorityElement = array[0];
  let count = 1;

  for (let i = 1; i < array.length; i++) {
    if (count === 0) {
      majorityElement = array[i];
      count = 1;
    } else if (array[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  // At this point, we have a potential majority element.
  // We need to verify if it actually occurs more than n/2 times.

  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === majorityElement) {
      count++;
    }
  }

  if (count > array.length / 2) {
    return majorityElement;
  } else {
    return -1; // No majority element exists.
  }
}

// Example usage:
const array = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(array);

if (majorityElement !== -1) {
  console.log("The majority element is: " + majorityElement);
} else {
  console.log("There is no majority element.");
}
