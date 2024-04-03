function findStringLength(str) {
    let length = 0;
    for (let char of str) {
        length++;
    }
    return length;
}

let myString = "Hello, World!";
let length = findStringLength(myString);
console.log(length); // Output: 13
