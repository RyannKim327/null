function findStringLength(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

let inputString = "Hello, World!";
let length = findStringLength(inputString);

console.log("Length of the string is: " + length);
