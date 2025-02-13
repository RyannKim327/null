function burrowsWheelerTransform(input: string): { transformed: string, last: string[] } {
    const n = input.length;
    const suffixArray: number[] = Array.from({ length: n }, (_, i) => i);
    
    // Sort suffixes
    suffixArray.sort((a, b) => {
        const suffixA = input.substring(a) + input.substring(0, a);
        const suffixB = input.substring(b) + input.substring(0, b);
        return suffixA.localeCompare(suffixB);
    });

    // Construct transformed string and last column
    const transformed = suffixArray.map(i => input[(i + n - 1) % n]).join('');
    const last = suffixArray.map(i => input[i]);
    
    return { transformed, last };
}

// Example usage
const inputString = "banana";
const result = burrowsWheelerTransform(inputString);
console.log("Transformed:", result.transformed);
console.log("Last Column:", result.last);
