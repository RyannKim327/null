function findStringLength(str) {
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }
    return count;
}

let string = "Hello, World!";
console.log(findStringLength(string)); // Output: 13
