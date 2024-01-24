const array = [1, 2, 3, 3, 4, 5, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 3, 3, 4, 5, 5];
const uniqueArray = array.filter((element, index, self) => {
    return index === self.indexOf(element);
});
console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 3, 3, 4, 5, 5];
const uniqueArray = [];
for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
    }
}
console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5]
