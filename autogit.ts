function getStringLength(str: string): number {
    let count = 0;
    for (const char of str) {
        count++;
    }
    return count;
}
function getUnicodeStrLength(str: string): number {
    return Array.from(str).length;
}
