function countChar(str: string, charToCount: string): number {
    let count = 0;
    for (let char of str) {
        if (char === charToCount) {
            count++;
        }
    }
    return count;
}

console.log(countChar("hello world", "l")); // Output: 3
function countChar(str: string, charToCount: string): number {
    return str.split(charToCount).length - 1;
}

console.log(countChar("hello world", "l")); // Output: 3
function countChar(str: string, charToCount: string): number {
    return [...str].reduce((acc, char) => char === charToCount ? acc + 1 : acc, 0);
}

console.log(countChar("hello world", "l")); // Output: 3
