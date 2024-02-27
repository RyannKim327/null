function longestCommonPrefix(strings) {
    if (strings.length === 0) return '';
    
    // Find the shortest string in the array
    let shortest = strings.reduce((a, b) => a.length <= b.length ? a : b);
    
    for (let i = 0; i < shortest.length; i++) {
        for (let str of strings) {
            if (str.charAt(i) !== shortest.charAt(i)) {
                return shortest.slice(0, i);
            }
        }
    }
    
    return shortest;
}

// Example
let strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings)); // Output: "fl"
