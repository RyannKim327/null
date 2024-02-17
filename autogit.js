const array = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]
const array = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
const array = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = array.reduce((acc, current) => {
    if (acc.indexOf(current) === -1) {
        acc.push(current);
    }
    return acc;
}, []);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
