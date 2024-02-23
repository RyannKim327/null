function findStringLength(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

let myString = "Hello, World!";
console.log(findStringLength(myString)); // Output: 13
