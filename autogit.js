function findMajorityElement(arr) {
  let majority = null;
  let count = 0;

  for (let num of arr) {
    if (count === 0) {
      majority = num;
      count = 1;
    } else if (num === majority) {
      count++;
    } else {
      count--;
    }
  }
  
  // Verification step (optional)
  count = 0;
  for (let num of arr) {
    if (num === majority) {
      count++;
    }
  }
  
  if (count > arr.length / 2) {
    return majority;
  } else {
    return null; // No majority element found
  }
}

// Example usage
const array = [3, 1, 3, 3, 2];
const majorityElement = findMajorityElement(array);
console.log("Majority Element:", majorityElement);
