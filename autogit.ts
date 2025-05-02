function countChar(str: string, charToCount: string): number {
    let count = 0;
    for (const char of str) {
        if (char === charToCount) {
            count++;
        }
    }
    return count;
}

// Example:
console.log(countChar("hello world", "l")); // Output: 3
function countChar(str: string, charToCount: string): number {
    return str.split(charToCount).length - 1;
}

console.log(countChar("hello world", "l")); // Output: 3
function countChar(str: string, charToCount: string): number {
    return Array.from(str).filter(c => c === charToCount).length;
}

console.log(countChar("hello world", "l")); // Output: 3
