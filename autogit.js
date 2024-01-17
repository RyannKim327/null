function findMajorityElement(arr) {
  let majorityElement = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (count === 0) {
      majorityElement = arr[i];
      count = 1;
    } else if (majorityElement === arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  // Verify if the majorityElement is indeed the majority
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === majorityElement) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return majorityElement;
  }

  return -1; // No majority element found
}
const array = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(array);
console.log("Majority Element:", majorityElement); // Output: 2
