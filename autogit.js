let arr = [4, 2, 8, 5, 1];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 4, 5, 8]
let arr = [4, 2, 8, 5, 1];
let sortedArr = [...arr].sort((a, b) => a - b);
console.log(sortedArr); // Output: [1, 2, 4, 5, 8]
function compare(a, b) {
  return a - b;
}

let arr = [4, 2, 8, 5, 1];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 4, 5, 8]
