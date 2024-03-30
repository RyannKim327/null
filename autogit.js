function longestCommonPrefix(strings) {
    if (strings.length === 0) return '';
    
    // Find the shortest string in the array
    const shortest = strings.reduce((shortest, current) =>
        current.length < shortest.length ? current : shortest
    );
    
    for (let i = 0; i < shortest.length; i++) {
        for (let str of strings) {
            if (str[i] !== shortest[i]) {
                return str.slice(0, i);
            }
        }
    }
    
    return shortest;
}

// Example usage
const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings)); // Output: "fl"
