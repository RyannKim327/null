function getStringLength(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

let str = "Hello, World!";
console.log(getStringLength(str)); // Output: 13
