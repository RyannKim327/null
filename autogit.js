let arr = [1, 2, 3, 4, 2, 3, 5, 6];

let uniqueArr = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6]
