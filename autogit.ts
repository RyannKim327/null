function computeLPSArray(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let length = 0; // length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}
function kmpSearch(text: string, pattern: string): number[] {
    const lps = computeLPSArray(pattern);
    const result: number[] = [];

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
            if (j === pattern.length) {
                result.push(i - j); // match found
                j = lps[j - 1]; // continue searching
            }
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return result;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const positions = kmpSearch(text, pattern);
console.log(positions); // Should output [10]
