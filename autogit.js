function findMajorityElement(arr) {
  let candidate;
  let count = 0;

  // Step 1: Find a potential candidate for the majority element
  for (let num of arr) {
    // If the count is 0, set the current number as the candidate
    if (count === 0) {
      candidate = num;
    }

    // If the current number is the same as the candidate, increment the count
    if (num === candidate) {
      count++;
    } else {
      // If the current number is different from the candidate, decrement the count
      count--;
    }
  }

  // Step 2: Verify if the candidate is the majority element
  count = 0;

  for (let num of arr) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return candidate;
  } else {
    return "No majority element found.";
  }
}
let array = [1, 2, 3, 2, 2, 2, 5, 4, 2];
let majorityElement = findMajorityElement(array);
console.log(majorityElement);
