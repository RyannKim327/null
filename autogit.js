function findStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

const str = "Hello, World!";
console.log(findStringLength(str)); // Output: 13
