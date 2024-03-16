function createPrefixTable(pattern) {
    const prefixTable = [0];
    let prefixLength = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (prefixLength > 0 && pattern.charAt(i) !== pattern.charAt(prefixLength)) {
            prefixLength = prefixTable[prefixLength - 1];
        }
        if (pattern.charAt(i) === pattern.charAt(prefixLength)) {
            prefixLength++;
        }
        prefixTable[i] = prefixLength;
    }

    return prefixTable;
}
function kmpSearch(text, pattern) {
    const prefixTable = createPrefixTable(pattern);
    let matches = [];

    let textIndex = 0;
    let patternIndex = 0;

    while (textIndex < text.length) {
        if (pattern.charAt(patternIndex) === text.charAt(textIndex)) {
            textIndex++;
            patternIndex++;
            if (patternIndex === pattern.length) {
                matches.push(textIndex - patternIndex);
                patternIndex = prefixTable[patternIndex - 1];
            }
        } else {
            if (patternIndex !== 0) {
                patternIndex = prefixTable[patternIndex - 1];
            } else {
                textIndex++;
            }
        }
    }

    return matches;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = kmpSearch(text, pattern);

console.log("Pattern found at positions:", matches);
