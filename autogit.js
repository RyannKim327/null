function burrowsWheelerTransform(text) {
    // Create an array to store all rotations of the text
    let rotations = [];
    
    // Generate all rotations of the text
    for (let i = 0; i < text.length; i++) {
        let rotation = text.slice(i) + text.slice(0, i);
        rotations.push(rotation);
    }
    
    // Sort the rotations lexicographically
    rotations.sort();
    
    // Extract the last characters of each rotation to form the transformed text
    let transformedText = rotations.map(rotation => rotation.slice(-1)).join('');
    
    // Find the index of the original text in the sorted rotations
    let originalIndex = rotations.indexOf(text);
    
    return { transformedText, originalIndex };
}

// Test the implementation
const text = "banana";
const { transformedText, originalIndex } = burrowsWheelerTransform(text);
console.log("Transformed text:", transformedText);
console.log("Original text index:", originalIndex);
