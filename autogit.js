var array = [1, 2, 3, 4, 4, 5, 6, 6];
var uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
var array = [1, 2, 3, 4, 4, 5, 6, 6];
var uniqueArray = array.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
var array = [1, 2, 3, 4, 4, 5, 6, 6];
var uniqueArray = [];

for (var i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
    }
}

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
