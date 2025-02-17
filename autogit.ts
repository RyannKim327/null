function bwt(input: string): { transformed: string, suffixArray: number[] } {
    // Step 1: Create the suffix array
    const suffixes = Array.from({ length: input.length }, (_, i) => {
        return { index: i, suffix: input.slice(i) };
    });

    // Step 2: Sort the suffixes
    suffixes.sort((a, b) => a.suffix.localeCompare(b.suffix));

    // Step 3: Build the BWT result and the suffix array
    const bwtResult = suffixes.map(suffix => {
        const lastCharIndex = suffix.index + input.length - 1;
        return input[lastCharIndex % input.length]; 
    }).join('');

    const suffixArray = suffixes.map(suffix => suffix.index);

    return { transformed: bwtResult, suffixArray: suffixArray };
}

// Example usage:
const input = "bananana";
const result = bwt(input);
console.log("Transformed:", result.transformed);
console.log("Suffix Array:", result.suffixArray);
