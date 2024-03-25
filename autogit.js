function findStringLength(str) {
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        length++;
    }
    return length;
}

let str = "Hello, World!";
console.log(findStringLength(str)); // Output: 13
