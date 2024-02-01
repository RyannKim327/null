function getStringLength(str) {
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }
    return count;
}
let myString = "Hello, world!";
let length = getStringLength(myString);
console.log(length); // Output: 13
