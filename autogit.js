function longestCommonPrefix(strings) {
    if (strings.length === 0) return '';

    let prefix = '';
    for (let i = 0; i < strings[0].length; i++) {
        const char = strings[0][i];
        if (strings.every(str => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }

    return prefix;
}

// Example Usage
const strings = ['apple', 'app', 'ape'];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: 'ap'
