function findCommonElements(array1, array2) {
  const commonElements = [];
  
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) && !commonElements.includes(array1[i])) {
      commonElements.push(array1[i]);
    }
  }
  
  return commonElements;
}
function findCommonElements(array1, array2) {
  const commonElements = array1.filter(element => array2.includes(element));
  return commonElements;
}
function findCommonElements(array1, array2) {
  const set1 = new Set(array1);
  const commonElements = array2.filter(element => set1.has(element));
  return commonElements;
}
