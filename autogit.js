function burrowsWheelerTransform(input) {
    // Create an array of rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        let rotation = input.slice(i) + input.slice(0, i);
        rotations.push(rotation);
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Extract the last characters of each rotation to construct the transformed string
    let transformedString = rotations.map(rotation => rotation[rotation.length - 1]).join('');

    // Find the original string index in the sorted rotations
    let originalIndex = rotations.indexOf(input);

    return { transformedString, originalIndex };
}

function burrowsWheelerInverseTransform(transformedString, originalIndex) {
    let table = [];
    
    for (let i = 0; i < transformedString.length; i++) {
        table.push({ char: transformedString[i], index: i });
    }
    
    table.sort((a, b) => a.char.localeCompare(b.char));
    
    let currentIndex = originalIndex;
    let result = '';
    
    for (let i = 0; i < transformedString.length; i++) {
        let currentChar = table[currentIndex].char;
        result = currentChar + result;
        currentIndex = table[currentIndex].index;
    }
    
    return result;
}

// Example usage
let inputString = 'banana';
let { transformedString, originalIndex } = burrowsWheelerTransform(inputString);
let originalString = burrowsWheelerInverseTransform(transformedString, originalIndex);

console.log('Input String: ', inputString);
console.log('Transformed String: ', transformedString);
console.log('Original String: ', originalString);
