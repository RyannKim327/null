function secondLargest(arr: number[]): number | null {
  if (arr.length < 2) return null; // Not enough elements

  // Sort array in descending order
  const sortedArr = [...arr].sort((a, b) => b - a);

  // Find the first element that is less than the largest
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] < sortedArr[0]) {
      return sortedArr[i];
    }
  }
  
  return null; // No second largest if all elements are equal
}
function secondLargest(arr: number[]): number | null {
  let largest = -Infinity;
  let second = -Infinity;
  
  for (const num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }
  
  return second === -Infinity ? null : second;
}
