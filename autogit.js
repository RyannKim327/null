let array = ['a', 'b', 'a', 'c', 'b'];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Output: ['a', 'b', 'c']
let array = ['a', 'b', 'a', 'c', 'b'];
let uniqueArray = array.filter((elem, index, self) => self.indexOf(elem) === index);
console.log(uniqueArray); // Output: ['a', 'b', 'c']
let array = ['a', 'b', 'a', 'c', 'b'];
let uniqueArray = array.reduce((acc, current) => {
    if (acc.indexOf(current) === -1) {
        acc.push(current);
    }
    return acc;
}, []);
console.log(uniqueArray); // Output: ['a', 'b', 'c']
