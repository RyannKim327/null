let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArr = arr.reduce((acc, current) => {
    if (!acc.includes(current)) {
        acc.push(current);
    }
    return acc;
}, []);

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
