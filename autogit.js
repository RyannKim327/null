let arr = [1, 2, 3, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
let arr = [1, 2, 3, 3, 4, 4, 5];
let uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArr);
let arr = [1, 2, 3, 3, 4, 4, 5];
let uniqueArr = [];
arr.forEach((element) => {
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
    }
});
console.log(uniqueArr);
