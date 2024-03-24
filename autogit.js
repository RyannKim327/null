function burrowsWheelerTransform(text) {
    // Generate all possible rotations of the text
    let rotations = [];
    for (let i = 0; i < text.length; i++) {
        let rotatedText = text.slice(i) + text.slice(0, i);
        rotations.push(rotatedText);
    }

    // Sort the rotations alphabetically
    rotations.sort();

    // Get the last characters of each rotation
    let transformedText = rotations.map(text => text[text.length - 1]).join('');

    // Find the index of the original text in the sorted rotations
    let originalIndex = rotations.indexOf(text);

    return { transformedText, originalIndex };
}

function inverseBurrowsWheelerTransform(transformedText, originalIndex) {
    const sortedText = Array.from(transformedText).sort();
    let table = {};
    for (let char of sortedText) {
        table[char] = table[char] || 0;
        table[char]++;
    }

    let firstColumn = {};
    let index = 0;
    for (let char in table) {
        firstColumn[char] = [];
        for (let i = 0; i < table[char]; i++) {
            firstColumn[char].push(index);
            index += 1;
        }
    }

    let currentIndex = originalIndex;
    let originalText = '';
    for (let i = 0; i < transformedText.length; i++) {
        let char = transformedText[currentIndex];
        originalText = char + originalText;
        let rank = firstColumn[char].indexOf(currentIndex);
        currentIndex = getCharIndex(transformedText, char, rank);
    }

    return originalText;
}

function getCharIndex(text, char, rank) {
    let index = -1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            rank--;
            if (rank < 0) {
                index = i;
                break;
            }
        }
    }
    return index;
}

// Example
let text = "hello world";
let { transformedText, originalIndex } = burrowsWheelerTransform(text);
console.log("Transformed Text:", transformedText);
console.log("Original Index:", originalIndex);

let originalText = inverseBurrowsWheelerTransform(transformedText, originalIndex);
console.log("Original Text:", originalText);
