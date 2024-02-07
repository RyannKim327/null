function findMajorityElement(arr) {
  let frequencyMap = {};
  let majorityElement = null;
  let majorityCount = 0;

  // Count frequency of each element
  for (let element of arr) {
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
  }

  // Find the element with highest frequency count
  for (let element in frequencyMap) {
    if (frequencyMap[element] > majorityCount) {
      majorityElement = element;
      majorityCount = frequencyMap[element];
    }
  }

  // Check if the element is the majority element
  if (majorityCount > arr.length / 2) {
    return majorityElement;
  } else {
    return "No majority element";
  }
}

// Example usage
const array = [2, 2, 2, 3, 4, 2, 5, 2, 6];
const majorityElement = findMajorityElement(array);
console.log("Majority Element:", majorityElement);
Majority Element: 2
