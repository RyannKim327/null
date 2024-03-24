function findStringLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    return length;
}

let myString = "Hello, World!";
let length = findStringLength(myString);
console.log(length); // Output: 13
