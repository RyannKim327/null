function burrowsWheelerTransform(input) {
    // Add a sentinel character at the end of the input string
    const text = input + '$';
    
    // Generate all possible cyclic rotations of the input string
    const rotations = [];
    for (let i = 0; i < text.length; i++) {
        const rotation = text.slice(i) + text.slice(0, i);
        rotations.push(rotation);
    }
    
    // Sort the rotations lexicographically
    rotations.sort();
    
    // Extract the last characters of each sorted rotation to get the BWT output
    const bwt = rotations.map(rotation => rotation.slice(-1)).join('');
    
    // Find the index of the original string in the sorted rotations
    const originalIndex = rotations.indexOf(input + '$');
    
    return { bwt, originalIndex };
}

function inverseBurrowsWheelerTransform(bwt, originalIndex) {
    // Create an empty table to store all possible rotations
    const table = [];
    
    // Fill the table with empty strings
    for (let i = 0; i < bwt.length; i++) {
        table.push('');
    }
    
    // Fill the table with sorted BWT characters
    for (let i = 0; i < bwt.length; i++) {
        for (let j = 0; j < bwt.length; j++) {
            table[j] = bwt[j] + table[j];
        }
        table.sort();
    }
    
    // Find the original string by locating the original index row in the table
    const originalString = table[originalIndex].replace('$', '');
    
    return originalString;
}

// Test the Burrows-Wheeler Transform algorithm
const input = 'banana';
const { bwt, originalIndex } = burrowsWheelerTransform(input);
const originalString = inverseBurrowsWheelerTransform(bwt, originalIndex);

console.log('Input:', input);
console.log('BWT:', bwt);
console.log('Original string:', originalString);
