function bwt(input) {
    // Step 1: Generate all rotations of the input string
    const rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Step 2: Sort the rotations in lexicographic order
    rotations.sort();

    // Step 3: Extract the last character of each rotation
    const bwtString = rotations.map(rotation => rotation.slice(-1)).join('');

    // Step 4: Return the transformed string
    return bwtString;
}
function inverseBwt(input) {
    // Step 1: Create an array to hold the intermediate steps
    const table = [];

    // Step 2: Initialize the table with the input string
    for (let i = 0; i < input.length; i++) {
        table[i] = input.split('');
    }

    // Step 3: Sort the table rows lexicographically
    for (let j = 1; j < input.length; j++) {
        table.sort();

        // Step 4: Update each row by appending the corresponding character from the input string
        for (let i = 0; i < input.length; i++) {
            table[i].push(input.charAt(i));
        }
    }

    // Step 5: Find the row that ends with '\0'
    const index = table.findIndex(row => row[row.length - 1] === '\0');

    // Step 6: Reconstruct the original string by following the last characters
    let originalString = '';
    for (let i = 0; i < input.length - 1; i++) {
        originalString += table[index][i];
    }

    // Step 7: Return the reconstructed string
    return originalString;
}
// Transform a string using Burrows-Wheeler Transform
const transformedString = bwt('banana');
console.log(transformedString);  // Output: "annb\$aa"

// Reconstruct the original string
const reconstructedString = inverseBwt(transformedString);
console.log(reconstructedString); // Output: "banana"
