function findCommonElements(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) && !result.includes(array1[i])) {
      result.push(array1[i]);
    }
  }
  return result;
}
function findCommonElements(array1, array2) {
  return array1.filter(element => array2.includes(element));
}
function findCommonElements(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const result = [];
  for (const element of set1) {
    if (set2.has(element)) {
      result.push(element);
    }
  }
  return result;
}
