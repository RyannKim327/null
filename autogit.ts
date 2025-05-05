function burrowsWheelerTransform(input: string): { bwt: string, lastColumn: string[], indexArray: number[] } {
    const length = input.length;
    
    // Create all cyclic shifts of input
    const cyclicShifts: string[] = [];
    for (let i = 0; i < length; i++) {
        cyclicShifts.push(input.substring(i) + input.substring(0, i));
    }

    // Sort the cyclic shifts lexicographically
    cyclicShifts.sort();

    // Construct the BWT string and the index array
    let bwtString = '';
    const indexArray: number[] = [];
    for (const shift of cyclicShifts) {
        bwtString += shift[length - 1]; // Last character of each sorted shift
        indexArray.push(input.length - shift.indexOf(shift.charAt(0)) - 1); // The original index of that shift
    }

    return { bwt: bwtString, lastColumn: cyclicShifts, indexArray };
}

// Example usage
const input = "banana$";
const { bwt, lastColumn } = burrowsWheelerTransform(input);
console.log("BWT:", bwt);
console.log("Last column of sorted shifts:", lastColumn);
