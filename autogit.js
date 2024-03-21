function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

let str = "hello world";
let char = "l";
let result = countOccurrences(str, char);
console.log(`Character '${char}' occurs ${result} times in the string "${str}"`);
