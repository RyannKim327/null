function burrowsWheelerTransform(text) {
    // Add end-of-text marker
    text += '$';

    // Generate all rotations of the text
    let rotations = [];
    for (let i = 0; i < text.length; i++) {
        let rotation = text.slice(i) + text.slice(0, i);
        rotations.push(rotation);
    }

    // Sort the rotations
    rotations.sort();

    // Extract the last characters of each rotation to form the transformed text
    let transformedText = rotations.map(rotation => rotation.charAt(rotation.length - 1)).join('');

    return transformedText;
}

function burrowsWheelerInverseTransform(transformedText) {
    // Create a matrix to store the sorted rotations
    let matrix = [];
    for (let i = 0; i < transformedText.length; i++) {
        matrix.push([]);
    }

    // Fill the matrix with the transformed text characters
    for (let i = 0; i < transformedText.length; i++) {
        for (let j = 0; j < transformedText.length; j++) {
            matrix[j][i] = transformedText.charAt(j);
        }
        transformedText = [...transformedText.slice(-1), ...transformedText.slice(0, -1)].join('');
    }

    // Sort the matrix rows
    matrix.sort();

    // Extract the row that ends with the end-of-text marker
    let originalText = matrix.find(row => row[row.length - 1] === '$').slice(0, -1);

    return originalText;
}

// Example
let text = 'hello';
let transformedText = burrowsWheelerTransform(text);
console.log('Transformed Text:', transformedText);

let originalText = burrowsWheelerInverseTransform(transformedText);
console.log('Original Text:', originalText);
