let arr = [5, 3, 9, 1, 7];
let max = -Infinity;
let secondMax = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] < max && arr[i] > secondMax) {
    secondMax = arr[i];
  }
}
console.log(secondMax);
let arr = [5, 3, 9, 1, 7];
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] < max && arr[i] > secondMax) {
    secondMax = arr[i];
  }
}

console.log(secondMax);
