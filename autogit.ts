function burrowsWheelerTransform(input: string): { bwt: string, index: number } {
    const len = input.length;
    const rotations: string[] = new Array(len);

    // Generating all rotations
    for (let i = 0; i < len; i++) {
        rotations[i] = input.slice(i) + input.slice(0, i);
    }

    // Sort rotations
    rotations.sort();

    // Create BWT result and remember the original index
    let bwt = '';
    let originalIndex = 0;

    for (let i = 0; i < len; i++) {
        bwt += rotations[i][len - 1]; // Last characters of sorted rotations
        if (rotations[i] === input) {
            originalIndex = i; // Find the original index
        }
    }

    return { bwt, index: originalIndex };
}

function inverseBurrowsWheelerTransform(bwt: string, index: number): string {
    const len = bwt.length;
    const sorted = Array.from(bwt).sort().join('');
    const next: number[] = new Array(len);

    const count: Record<string, number> = {};
    for (const char of bwt) count[char] = (count[char] || 0) + 1;

    const cumulativeCount: Record<string, number> = {};
    let total = 0;
    for (const char of sorted) {
        if (!cumulativeCount[char]) {
            cumulativeCount[char] = total;
            total += count[char];
        }
    }

    const occurrenceCount: Record<string, number> = {};
    for (let i = 0; i < len; i++) {
        const char = bwt[i];
        next[i] = cumulativeCount[char] + (occurrenceCount[char] || 0);
        occurrenceCount[char] = (occurrenceCount[char] || 0) + 1;
    }

    // Reconstruct the original string
    let result = '';
    for (let i = 0; i < len; i++) {
        result += bwt[index];
        index = next[index];
    }

    return result.split('').reverse().join('');
}

// Example Usage
const inputString = "banana";
const { bwt, index } = burrowsWheelerTransform(inputString);
console.log("BWT:", bwt);
console.log("Original Index:", index);

const originalString = inverseBurrowsWheelerTransform(bwt, index);
console.log("Original String:", originalString);
