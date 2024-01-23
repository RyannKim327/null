function findMajorityElement(arr) {
  const map = {};
  
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    map[num] = (map[num] || 0) + 1;
    
    if (map[num] > arr.length / 2) {
      return num;
    }
  }
  
  return null; // No majority element found
}

// Example usage:
const arr = [2, 5, 2, 2, 3, 2, 4, 2, 1];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement); // Output: 2
