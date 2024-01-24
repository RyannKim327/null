function findCommonElements(arr1, arr2) {
  const commonElements = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonElements.push(arr1[i]);
        break; // Break out of the inner loop when a common element is found
      }
    }
  }

  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return [...set1.intersection(set2)];
}

// Polyfill for Set.prototype.intersection()
Set.prototype.intersection = function (set) {
  const intersectionSet = new Set();
  for (const element of set) {
    if (this.has(element)) {
      intersectionSet.add(element);
    }
  }
  return intersectionSet;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Output: [4, 5]
