const array = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4]
const array = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = array.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
console.log(uniqueArray); // [1, 2, 3, 4]
const array = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = [];
for (const element of array) {
    if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
    }
}
console.log(uniqueArray); // [1, 2, 3, 4]
