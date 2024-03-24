function burrowsWheelerTransform(inputString) {
    const inputStringWithEOF = inputString + '$';
    const rotations = [];

    for (let i = 0; i < inputStringWithEOF.length; i++) {
        const rotation = inputStringWithEOF.slice(i) + inputStringWithEOF.slice(0, i);
        rotations.push(rotation);
    }

    rotations.sort();

    let transformedString = "";
    for (let rotation of rotations) {
        transformedString += rotation.slice(-1);
    }

    return transformedString;
}

// Example usage
const inputString = "banana";
const bwtResult = burrowsWheelerTransform(inputString);
console.log("Burrows-Wheeler transformed string: ", bwtResult);

// Output: "Burrows-Wheeler transformed string:  annb$aa"
