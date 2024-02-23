function findStringLength(str) {
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }
    return count;
}

let myString = "Hello, World!";
let length = findStringLength(myString);
console.log(length); // Output: 13
