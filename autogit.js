function burrowsWheelerTransform(input) {
    // Create an array of all possible rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Extract the last characters of each rotation to form the transformed string
    let transformedString = rotations.map(rotation => rotation.slice(-1)).join('');

    // Find the index of the original input in the sorted rotations
    let originalIndex = rotations.indexOf(input);

    return { transformedString, originalIndex };
}

function inverseBurrowsWheelerTransform(transformedString, originalIndex) {
    let table = new Array(transformedString.length);
    for (let i = 0; i < table.length; i++) {
        table[i] = { char: transformedString[i], index: i };
    }

    table.sort((a, b) => {
        if (a.char === b.char) {
            return a.index - b.index;
        }
        return a.char.localeCompare(b.char);
    });

    let output = '';
    let current = table[originalIndex];
    for (let i = 0; i < table.length; i++) {
        output += current.char;
        current = table[current.index];
    }

    return output;
}

// Usage example
let inputString = 'banana';
let { transformedString, originalIndex } = burrowsWheelerTransform(inputString);
console.log('Transformed String:', transformedString);

let originalString = inverseBurrowsWheelerTransform(transformedString, originalIndex);
console.log('Original String:', originalString);
