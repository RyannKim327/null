function findMajorityElement(arr) {
  let majority = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === majority) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      majority = arr[i];
      count = 1;
    }
  }

  // Verifying if the majority element is a true majority
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === majority) {
      count++;
    }
  }
  if (count > arr.length / 2) {
    return majority;
  } else {
    return "No majority element found.";
  }
}

// Example usage
const array = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(findMajorityElement(array)); // Output: 2
