function buildLPS(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
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
                // do not increment i here
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function kmpSearch(text: string, pattern: string): number[] {
    const lps = buildLPS(pattern);
    const result: number[] = [];

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;

            if (j === pattern.length) {
                // pattern found at i - j
                result.push(i - j);
                j = lps[j - 1];
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

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = kmpSearch(text, pattern);
console.log("Pattern found at indices:", matches);
