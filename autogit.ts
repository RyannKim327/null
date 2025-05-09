const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr); // [1, 2, 3, 4, 5]
const uniqueArr = [...new Set(arr)];
const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
const uniqueArr = [];
const seen = new Set();

for (const item of arr) {
  if (!seen.has(item)) {
    seen.add(item);
    uniqueArr.push(item);
  }
}
