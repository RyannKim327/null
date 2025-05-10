function burrowsWheelerTransform(input: string): string {
    const len = input.length;

    // Create an array to store the cyclic shifts
    const cyclicShifts: string[] = [];
    
    // Generate all cyclic shifts
    for (let i = 0; i < len; i++) {
        const shifted = input.slice(i) + input.slice(0, i);
        cyclicShifts.push(shifted);
    }

    // Sort the array of cyclic shifts
    cyclicShifts.sort();

    // Generate the BWT output from the sorted shifts
    let bwtOutput = '';
    for (const shift of cyclicShifts) {
        bwtOutput += shift[len - 1]; // Take the last character of each sorted shift
    }

    return bwtOutput;
}

// Example Usage:
const inputString = "BANANA";
const bwtResult = burrowsWheelerTransform(inputString);
console.log(bwtResult); // Expected output (for "BANANA"): "BNNAA$"
