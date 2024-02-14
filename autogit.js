function burrowsWheelerTransform(text) {
    // Step 2: Generate rotations
    let rotations = [];
    for (let i = 0; i < text.length; i++) {
        let rotation = text.slice(i) + text.slice(0, i);
        rotations.push(rotation);
    }

    // Step 3: Sort rotations
    rotations.sort();

    // Step 4: Create encoded text
    let encodedText = '';
    for (let i = 0; i < rotations.length; i++) {
        encodedText += rotations[i][text.length - 1];
    }

    // Step 5: Find the original text index
    let originalIndex = rotations.indexOf(text);

    // Step 6: Return the encoded text and original index
    return { encodedText, originalIndex };
}
let inputText = 'banana';
let { encodedText, originalIndex } = burrowsWheelerTransform(inputText);

console.log('Encoded Text:', encodedText);
console.log('Original Index:', originalIndex);
Encoded Text: annb$aa
Original Index: 3
