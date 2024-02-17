let arr = [1, 2, 3, 4, 2, 3, 5];

let uniqueArray = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
