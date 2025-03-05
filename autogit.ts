const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = Array.from(new Set(arr));

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.reduce((accumulator, current) => {
    if (!accumulator.includes(current)) {
        accumulator.push(current);
    }
    return accumulator;
}, []);

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
