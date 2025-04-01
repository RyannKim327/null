function longestCommonPrefix(strings: string[]): string {
    if (strings.length === 0) return '';

    let prefix = '';
    for (let i = 0; i < strings[0].length; i++) {
        const char = strings[0][i];
        if (strings.some(str => str[i] !== char)) {
            break;
        }
        prefix += char;
    }

    return prefix;
}

const strings = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: "fl"
