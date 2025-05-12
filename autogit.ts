const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = Array.from(new Set(arr));

console.log(uniqueArr); // [1, 2, 3, 4, 5]
const uniqueArr = [...new Set(arr)];
const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
const seen: {[key: string]: boolean} = {};
const uniqueArr = arr.filter(item => {
  if (seen[item]) {
    return false;
  } else {
    seen[item] = true;
    return true;
  }
});
