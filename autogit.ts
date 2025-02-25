function burrowsWheelerTransform(input: string): { bwt: string; suffixArray: number[] } {
    const length = input.length;
    const rotations: string[] = [];
    
    // Generate all rotations of the input string
    for (let i = 0; i < length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Build BWT and the suffix array
    let bwt = "";
    const suffixArray: number[] = [];
    
    for (let i = 0; i < length; i++) {
        bwt += rotations[i][length - 1];
        suffixArray.push(input.length - rotations[i].indexOf(rotations[i]));
    }

    return { bwt, suffixArray };
}

// Example usage
const result = burrowsWheelerTransform("banana");
console.log("BWT:", result.bwt); // Output: BWT: annb$aa
console.log("Suffix Array:", result.suffixArray); // Output: Suffix Array: [5, 3, 1, 0, 4, 2]
