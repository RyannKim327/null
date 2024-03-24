function boyerMoore(text, pattern) {
    function buildBadCharTable(pattern) {
        const table = {};

        for (let i = 0; i < pattern.length - 1; i++) {
            table[pattern[i]] = pattern.length - i - 1;
        }
        
        return table;
    }

    function buildGoodSuffixTable(pattern) {
        const table = new Array(pattern.length);
        const suffix = new Array(pattern.length).fill(0);
        
        let j = 0;
        
        for (let i = pattern.length - 1; i >= 0; i--) {
            if (pattern[i] === pattern[j]) {
                suffix[i] = j + 1;
                j++;
            } else {
                suffix[i] = 0;
                j = 0;
            }
        }

        for (let i = 0; i < pattern.length; i++) {
            table[i] = pattern.length - suffix[i];
        }

        for (let i = 0; i < pattern.length - 1; i++) {
            const suffixLen = suffix.length - suffix[i];
            if (suffix[i] === i + 1) {
                for (let j = 0; j < suffixLen; j++) {
                    if (!table[j] || table[j] > suffixLen) {
                        table[j] = suffixLen;
                    }
                }
            }
        }

        return table;
    }

    const badCharTable = buildBadCharTable(pattern);
    const goodSuffixTable = buildGoodSuffixTable(pattern);
    const n = text.length;
    const m = pattern.length;
    
    let i = 0;

    while (i <= n - m) {
        let j = m - 1;
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }
        
        if (j < 0) {
            return i;
        } else {
            const badCharSkip = badCharTable[text[i + j]] || m;
            const goodSuffixSkip = goodSuffixTable[j];
            i += Math.max(badCharSkip, goodSuffixSkip);
        }
    }

    return -1;
}

// Example
const text = "exampletextforexample";
const pattern = "example";
const index = boyerMoore(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
