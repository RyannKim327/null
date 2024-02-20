function getStringLength(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

let myString = "Hello, World!";
let length = getStringLength(myString);
console.log(length); // Output: 13
