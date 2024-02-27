function boyerMooreSearch(text, pattern) {
    const charTable = createCharTable(pattern);
    const offsetTable = createOffsetTable(pattern);

    for (let i = pattern.length - 1; i < text.length;) {
        let j = pattern.length - 1;
        while (j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }

        if (j === -1) {
            return i + 1;
        }

        i += Math.max(offsetTable[pattern[j]] || 1, j - charTable[text[i]]);
    }

    return -1;
}

function createCharTable(pattern) {
    const table = {};
    for (let i = 0; i < pattern.length - 1; i++) {
        table[pattern[i]] = pattern.length - 1 - i;
    }
    return table;
}

function createOffsetTable(pattern) {
    const table = {};
    const lastPrefixPosition = pattern.length;
    for (let i = pattern.length - 1; i >= 0; i--) {
        if (isPrefix(pattern, i + 1)) {
            lastPrefixPosition = i + 1;
        }
        table[pattern.length - 1 - i] = lastPrefixPosition - i + pattern.length - 1;
    }

    for (let i = 0; i < pattern.length - 1; i++) {
        const slen = suffixLength(pattern, i);
        table[slen] = pattern.length - 1 - i + slen;
    }

    return table;
}

function isPrefix(pattern, p) {
    for (let i = p, j = 0; i < pattern.length; i++, j++) {
      if (pattern[i] !== pattern[j]) return false;
    }
    return true;
}

function suffixLength(pattern, p) {
    let len = 0;
    for (let i = p, j = pattern.length - 1; i >= 0 && pattern[i] === pattern[j]; i--, j--) {
        len += 1;
    }
    return len;
}
const text = "ABCDABDABCDABCDABCAA";
const pattern = "ABCDABCA";
const index = boyerMooreSearch(text, pattern);
console.log(index); // Output: 12
