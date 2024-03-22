let array = [1, 2, 3, 3, 4, 5, 5, 6];

let uniqueArray = [...new Set(array)];

console.log(uniqueArray);
let array = [1, 2, 3, 3, 4, 5, 5, 6];

let uniqueArray = array.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

console.log(uniqueArray);
