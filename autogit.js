function findStringLength(str) {
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }
    return count;
}

let str = "Hello, World!";
let length = findStringLength(str);
console.log(length); // Output: 13
