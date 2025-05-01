const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
const arr = [1, 2, 3, 4, 5];
const reversedArr = [...arr].reverse();
console.log(reversedArr); // [5, 4, 3, 2, 1]
console.log(arr); // [1, 2, 3, 4, 5] (original untouched)
const arr = [1, 2, 3, 4, 5];
const reversedArr: number[] = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}

console.log(reversedArr); // [5, 4, 3, 2, 1]
