function burrowsWheelerTransform(text) {
    let rotations = [];
    
    // Generate all possible rotations of the input text
    for (let i = 0; i < text.length; i++) {
        let rotation = text.slice(i) + text.slice(0, i);
        rotations.push(rotation);
    }
    
    // Sort the rotations lexicographically
    rotations.sort();
    
    // Construct the Burrows-Wheeler Transform by taking the last characters of each rotation
    let transformedText = rotations.map(rotation => rotation.slice(-1)).join('');
    
    return transformedText;
}

function burrowsWheelerInverseTransform(transformedText) {
    let table = [];
    
    // Generate the table of rotations (rows)
    for (let i = 0; i < transformedText.length; i++) {
        let row = Array.from(transformedText).sort().join('');
        table.push(row);
        transformedText = row;
    }
    
    return table.find(row => row.endsWith('$')).replace('$', '');
}

// Test the Burrows-Wheeler Transform algorithm
let text = "hello";
let transformedText = burrowsWheelerTransform(text);
console.log("Transformed text:", transformedText);

let originalText = burrowsWheelerInverseTransform(transformedText);
console.log("Original text:", originalText);
