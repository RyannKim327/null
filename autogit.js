function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let leftIdx = 0,
    rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  result.push(...left.slice(leftIdx));
  result.push(...right.slice(rightIdx));

  return result;
}

// Usage example:
const unsortedArray = [5, 2, 1, 6, 3, 9];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
