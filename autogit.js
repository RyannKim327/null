function findMajorityElement(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let count = 0;
    for (let j = 0; j < length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }
    if (count > length / 2) {
      return arr[i];
    }
  }
  return -1; // No majority element found
}

const array = [1, 2, 3, 3, 3, 4, 5, 3, 3];
console.log(findMajorityElement(array)); // Output: 3
function findMajorityElement(arr) {
  let count = 0;
  let majorityElement = null;
  
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      majorityElement = arr[i];
    }
    if (arr[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }
  
  return majorityElement;
}

const array = [1, 2, 3, 3, 3, 4, 5, 3, 3];
console.log(findMajorityElement(array)); // Output: 3
