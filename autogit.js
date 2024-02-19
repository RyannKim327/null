function getStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

let str = "Hello, World!";
let length = getStringLength(str);
console.log(length); // Output: 13
