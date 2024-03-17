function removeDuplicates(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

// Example usage
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
