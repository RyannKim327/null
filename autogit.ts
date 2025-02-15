function createBadCharTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const length = pattern.length;
    
    for (let i = 0; i < length; i++) {
        // Only store the last occurrence of each character in the pattern
        badCharTable[pattern[i]] = i;
    }
    
    return badCharTable;
}

function createGoodSuffixTable(pattern: string): number[] {
    const length = pattern.length;
    const suffixes = new Array<number>(length).fill(-1);
    const goodSuffixTable = new Array<number>(length).fill(length);
    
    for (let i = length - 1; i >= 0; i--) {
        if (suffixes[i] === -1) {
            suffixes[i] = length - 1 - i;
        } else {
            suffixes[length - 1 - suffixes[i]] = suffixes[i];
        }
    }
    
    for (let i = 0; i < length - 1; i++) {
        goodSuffixTable[suffixes[i]] = length - 1 - i;
    }

    return goodSuffixTable;
}

function boyerMooreSearch(text: string, pattern: string): number[] {
    const badCharTable = createBadCharTable(pattern);
    const goodSuffixTable = createGoodSuffixTable(pattern);
    
    const textLength = text.length;
    const patternLength = pattern.length;
    const occurrences: number[] = [];
    
    let s = 0; // s is the shift of the pattern with respect to text
    
    while (s <= textLength - patternLength) {
        let j = patternLength - 1; // start matching from the end of the pattern
        
        // Keep reducing j while characters are matching
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }
        
        if (j < 0) {
            // Found a match
            occurrences.push(s);
            // Shift the pattern using good suffix rule
            s += goodSuffixTable[0];
        } else {
            // Shift the pattern using the bad character rule
            const badCharShift = badCharTable[text[s + j]] !== undefined ? j - badCharTable[text[s + j]] : j + 1;
            const goodSuffixShift = goodSuffixTable[j];
            s += Math.max(badCharShift, goodSuffixShift);
        }
    }
    
    return occurrences;
}

// Example usage:
const text = "ababcababcabc";
const pattern = "abc";
const result = boyerMooreSearch(text, pattern);
console.log(result); // Output: [2, 7, 12]
