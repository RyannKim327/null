function findStringLength(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

let str = "Hello, World!";
let length = findStringLength(str);
console.log(length); // Output: 13
