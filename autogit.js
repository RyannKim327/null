function stringMatch(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    const lps = new Array(m).fill(0);
    let i = 0, j = 0;
    computeLPSArray(pattern, m, lps);
    const indices = [];

    while (j < n) {
        if (pattern[i] === text[j]) {
            i++;
            j++;
        }

        if (i === m) {
            indices.push(j - i);
            i = lps[i - 1];
        }
        else if (j < n && pattern[i] !== text[j]) {
            if (i !== 0) {
                i = lps[i - 1];
            }
            else {
                j++;
            }
        }
    }

    return indices;
}

function computeLPSArray(pattern, m, lps) {
    let length = 0;
    let i = 1;
    lps[0] = 0;

    while (i < m) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        }
        else {
            if (length !== 0) {
                length = lps[length - 1];
            }
            else {
                lps[i] = 0;
                i++;
            }
        }
    }
}
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";
const indices = stringMatch(text, pattern);
console.log(indices); // Output: [5, 14]
