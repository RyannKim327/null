function buildBadCharTable(pattern: string): Record<string, number> {
    const badCharTable: Record<string, number> = {};
    
    for (let i = 0; i < pattern.length - 1; i++) {
        badCharTable[pattern[i]] = pattern.length - 1 - i;
    }

    // Default case: shift by the length of pattern
    badCharTable['*'] = pattern.length; // use '*' as a default character

    return badCharTable;
}

function boyerMooreHorspool(haystack: string, needle: string): number {
    const m = needle.length;
    const n = haystack.length;

    if (m === 0) return 0; // Immediate return for empty needle
    if (n === 0 || m > n) return -1; // If haystack is empty or needle is longer

    const badCharTable = buildBadCharTable(needle);
    
    let i = 0; // Position in haystack

    while (i <= n - m) {
        let j = m - 1; // Position in needle

        while (j >= 0 && haystack[i + j] === needle[j]) {
            j--; // Compare from the end of the needle
        }

        if (j < 0) {
            // Match found
            return i;
        } else {
            // Character not matched; compute the shift
            const badCharShift = badCharTable[haystack[i + j]] || badCharTable['*'];
            i += badCharShift; // Shift the haystack index
        }
    }

    return -1; // No match found
}

// Example usage
const haystack = "ababcabcabababd";
const needle = "ababd";

const index = boyerMooreHorspool(haystack, needle);
console.log(index); // Output: 10
