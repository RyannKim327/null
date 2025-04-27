function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // reduce prefix
            if (prefix === '') return '';
        }
    }

    return prefix;
}
const words = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(words)); // Output: "fl"
