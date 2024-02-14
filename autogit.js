function findMajorityElement(arr) {
  const hashMap = {};
  
  // Count the frequency of each element
  for (let num of arr) {
    hashMap[num] = hashMap[num] + 1 || 1;
  }
  
  let majorityElement = null;
  let count = 0;
  
  // Find the element with the highest frequency
  for (let num in hashMap) {
    if (hashMap[num] > count) {
      majorityElement = num;
      count = hashMap[num];
    }
  }
  
  // Check if the majority element satisfies the condition
  if (count > arr.length / 2) {
    return majorityElement;
  }
  
  return "No majority element found";
}

// Example usage
const arr = [2, 2, 3, 4, 2, 2, 6];
console.log(findMajorityElement(arr)); // Output: 2
