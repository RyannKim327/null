let arr: number[] = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]
let originalArr: number[] = [1, 2, 3, 4, 5];
let reversedArr: number[] = originalArr.slice().reverse();
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
console.log(originalArr); // Output: [1, 2, 3, 4, 5] (original array is unchanged)
