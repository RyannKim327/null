let arr = [1, 2, 2, 3, 4, 4, 5];

let uniqueArr = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 2, 3, 4, 4, 5];

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
