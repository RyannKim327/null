function findFirstRepeatedChar(str: string): string | null {
    const seen = new Set<string>();
    for (const char of str) {
        if (seen.has(char)) {
            return char; // first repeat found
        }
        seen.add(char);
    }
    return null; // no repeats found
}
console.log(findFirstRepeatedChar('abca')); // Output: 'a'
console.log(findFirstRepeatedChar('abcdef')); // Output: null
