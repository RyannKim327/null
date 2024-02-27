let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArr = Array.from(new Set(arr));
let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);
let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArr = arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
}, []);
