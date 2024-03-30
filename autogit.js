const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.reduce((acc, current) => {
    if (acc.indexOf(current) === -1) {
        acc.push(current);
    }
    return acc;
}, []);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
