function computeLPSArray(pattern) {
    let lps = [0];
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function KMPSearch(text, pattern) {
    let M = pattern.length;
    let N = text.length;

    let lps = computeLPSArray(pattern);
    let i = 0;
    let j = 0;
    let indices = [];

    while (i < N) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === M) {
            indices.push(i - j);
            j = lps[j - 1];
        } else if (i < N && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return indices;
}

// Example usage
let text = "ABCABABDABCABCDABCD";
let pattern = "ABCD";
let indices = KMPSearch(text, pattern);
console.log("Pattern found at indices:", indices);  // [12]
