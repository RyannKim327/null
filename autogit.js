function computePrefixArray(pattern) {
    let prefixArray = [0];
    let j = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern.charAt(i) !== pattern.charAt(j)) {
            j = prefixArray[j - 1];
        }
        if (pattern.charAt(i) === pattern.charAt(j)) {
            j++;
        }
        prefixArray[i] = j;
    }

    return prefixArray;
}
function kmpSearch(text, pattern) {
    const prefixArray = computePrefixArray(pattern);
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text.charAt(i) !== pattern.charAt(j)) {
            j = prefixArray[j - 1];
        }
        if (text.charAt(i) === pattern.charAt(j)) {
            j++;
        }
        if (j === pattern.length) {
            return i - j + 1; // pattern found at index i - j + 1
        }
    }

    return -1; // pattern not found
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = kmpSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
