function findCommonElements(array1, array2) {
  const commonElements = [];

  for (let element of array1) {
    if (array2.includes(element)) {
      commonElements.push(element);
    }
  }

  return commonElements;
}
function findCommonElements(array1, array2) {
  return array1.filter(element => array2.includes(element));
}
function findCommonElements(array1, array2) {
  const set2 = new Set(array2);
  return array1.filter(element => set2.has(element));
}
function findCommonElements(array1, array2) {
  const obj = {};
  const commonElements = [];

  for (let element of array1) {
    obj[element] = true;
  }

  for (let element of array2) {
    if (obj[element]) {
      commonElements.push(element);
    }
  }

  return commonElements;
}
