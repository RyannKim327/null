function findMajorityElement(array) {
  let candidate;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (count === 0) {
      candidate = array[i];
      count = 1;
    } else if (candidate === array[i]) {
      count++;
    } else {
      count--;
    }
  }

  // At this point, the majority element should be stored in `candidate`
  // Now, we need to verify if it is the actual majority element

  // Resetting the count
  count = 0;

  for (let i = 0; i < array.length; i++) {
    if (candidate === array[i]) {
      count++;
    }
  }

  if (count > array.length / 2) {
    return candidate;
  } else {
    return "No majority element found.";
  }
}
const array = [1, 2, 2, 2, 3, 2, 4, 2, 5];

console.log(findMajorityElement(array)); // Output: 2
