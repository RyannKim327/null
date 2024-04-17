function longestCommonPrefix(strings) {
    if (strings.length === 0) {
        return '';
    }

    // Find the shortest string in the array
    let shortest = strings.reduce((a, b) => a.length <= b.length ? a : b);

    for (let i = 0; i < shortest.length; i++) {
        for (let str of strings) {
            if (str[i] !== shortest[i]) {
                return shortest.slice(0, i);
            }
        }
    }

    return shortest;
}

// Example
const strings = ['flower', 'flight', 'flour'];
console.log(longestCommonPrefix(strings)); // Output: 'fl'
