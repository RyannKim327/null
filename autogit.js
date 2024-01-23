function findMajorityElement(array) {
  const hashmap = {};

  // Count the frequency of each element
  for (const element of array) {
    if (hashmap[element]) {
      hashmap[element]++;
    } else {
      hashmap[element] = 1;
    }
  }

  // Find the element with the maximum frequency
  let majorityElement = null;
  let maxFrequency = 0;
  for (const element in hashmap) {
    if (hashmap[element] > maxFrequency) {
      majorityElement = element;
      maxFrequency = hashmap[element];
    }
  }

  // Check if the majority element exists
  if (maxFrequency > array.length / 2) {
    return majorityElement;
  } else {
    return "No majority element found";
  }
}

// Example usage
const array = [2, 2, 3, 4, 2, 2, 5];
const majorityElement = findMajorityElement(array);
console.log(majorityElement); // Output: 2
