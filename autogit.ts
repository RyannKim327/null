function isSortedAscending(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
function isSortedAscending(arr: number[]): boolean {
  return arr.every((value, index) => index === 0 || arr[index - 1] <= value);
}
