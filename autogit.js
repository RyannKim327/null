function findMajorityElement(arr) {
  const countMap = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element in countMap) {
      countMap[element]++;
    } else {
      countMap[element] = 1;
    }
  }

  let majorityElement = null;
  let majorityCount = 0;
  for (const element in countMap) {
    if (countMap[element] > majorityCount) {
      majorityElement = element;
      majorityCount = countMap[element];
    }
  }

  if (majorityCount > arr.length / 2) {
    return majorityElement;
  } else {
    return null;
  }
}

// Example usage
const array = [1, 2, 3, 3, 3, 3, 4, 3, 5];
const majorityElement = findMajorityElement(array);
console.log(majorityElement);
