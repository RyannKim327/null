function burrowsWheelerTransform(text) {
    let rotations = [];
    
    // Generate all rotations of the input text
    for (let i = 0; i < text.length; i++) {
        let rotation = text.slice(i) + text.slice(0, i);
        rotations.push(rotation);
    }
    
    // Sort the rotations lexicographically
    rotations.sort();
    
    // Extract the last characters of each rotation to form the BWT
    let bwt = rotations.map(rotation => rotation.charAt(text.length - 1)).join('');
    
    return bwt;
}
function inverseBurrowsWheelerTransform(bwt) {
    let table = new Array(bwt.length);
    
    // Populate the table with sorted characters of the BWT
    for (let i = 0; i < bwt.length; i++) {
        table[i] = bwt.split('').sort().join('');
        bwt = table[i];
    }
    
    // Start with the original row which ends with the sentinel character
    let index = bwt.indexOf('$');
    let originalRow = table[index];
    
    // Reconstruct the original text
    let text = '';
    for (let i = 0; i < bwt.length - 1; i++) {
        text = originalRow[index] + text;
        index = table.findIndex(row => row[index] + '' == originalRow[index]);
    }
    
    return text;
}
let inputText = 'hello$';
let bwt = burrowsWheelerTransform(inputText);
let originalText = inverseBurrowsWheelerTransform(bwt);

console.log('Original Text:', inputText);
console.log('BWT:', bwt);
console.log('Decoded Text:', originalText);
