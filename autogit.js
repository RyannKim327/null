function findCommonElements(array1, array2) {
  const commonElements = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      commonElements.push(array1[i]);
    }
  }
  return commonElements;
}
function findCommonElements(array1, array2) {
  return array1.filter(element => array2.includes(element));
}
function findCommonElements(array1, array2) {
  const set = new Set(array2);
  return array1.filter(element => set.has(element));
}
function findCommonElements(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  return Array.from(new Set([...set1].filter(x => set2.has(x))));
}
