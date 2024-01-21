function findMajorityElement(arr) {
  // Create an object to count the occurrences of each element
  const count = {};
  
  // Iterate through the array and count the occurrences
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  }
  
  // Iterate through the count object to find the majority element
  for (const key in count) {
    if (count[key] > arr.length / 2) {
      return key;
    }
  }
  
  // If no majority element is found, return null or any other suitable value
  return null;
}

// Example usage
const array = [2, 4, 2, 2, 5, 2, 8, 2, 9, 2, 2];
const majorityElement = findMajorityElement(array);
console.log(majorityElement);
