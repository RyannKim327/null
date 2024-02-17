function burrowsWheelerTransform(input) {
    // Generate all possible cyclic rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the cyclic rotations lexicographically
    rotations.sort();

    // Extract the last characters of each cyclic rotation
    let transformed = rotations.map(rotation => rotation.charAt(rotation.length - 1)).join('');

    // Find the index of the original string in the sorted rotations
    let originalIndex = rotations.indexOf(input);

    return { transformed, originalIndex };
}

function inverseBurrowsWheelerTransform(input, originalIndex) {
    let table = Array(input.length).fill(null).map(() => Array(input.length).fill(null));

    // Fill in the first column of the table with the sorted characters of the transformed string
    let sortedInput = input.split('').sort();
    input.split('').forEach((char, index) => {
        table[index][0] = sortedInput[index];
    });

    // Fill in the remaining columns of the table
    for (let i = 1; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            table[j][i] = table[j][i - 1] + table[(j + 1) % input.length][i - 1];
        }
        table.sort();
    }

    let original = table[originalIndex].join('');

    return original;
}

// Example
let input = "hello world";
let { transformed, originalIndex } = burrowsWheelerTransform(input);
let original = inverseBurrowsWheelerTransform(transformed, originalIndex);

console.log("Original: " + input);
console.log("Transformed: " + transformed);
console.log("Decoded: " + original);
