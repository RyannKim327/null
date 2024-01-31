function mergeSort(inputArray) {
  let subarraySize = 1;
  let tempArray = [];
  
  while (subarraySize < inputArray.length) {
    let startIndex = 0;
    let tempIndex = 0;
    
    while (startIndex < inputArray.length) {
      const midIndex = Math.min(startIndex + subarraySize - 1, inputArray.length - 1);
      const leftIndex = startIndex;
      const rightIndex = midIndex + 1;
      
      const leftArray = [];
      const rightArray = [];
      
      while (leftIndex <= midIndex) {
        leftArray.push(inputArray[leftIndex]);
        leftIndex++;
      }
      
      while (rightIndex <= midIndex + subarraySize && rightIndex < inputArray.length) {
        rightArray.push(inputArray[rightIndex]);
        rightIndex++;
      }
      
      let index = startIndex;
      while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] <= rightArray[0]) {
          inputArray[index] = leftArray.shift();
        } else {
          inputArray[index] = rightArray.shift();
        }
        index++;
      }
      
      while (leftArray.length > 0) {
        inputArray[index] = leftArray.shift();
        index++;
      }
      
      while (rightArray.length > 0) {
        inputArray[index] = rightArray.shift();
        index++;
      }
      
      startIndex += subarraySize * 2;
    }
    
    subarraySize *= 2;
    tempArray = inputArray.slice();
  }
  
  return inputArray;
}
const array = [5, 8, 2, 10, 4];
console.log(mergeSort(array)); // Output: [2, 4, 5, 8, 10]
