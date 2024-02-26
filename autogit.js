function bwt(text) {
    let textWithEOF = text + '$';
    let rotations = rotateText(textWithEOF);
    rotations.sort();
    let bwtText = rotations.map(str => str.slice(-1)).join('');
    return bwtText;
}

function rotateText(text) {
    let rotations = [];
    for (let i = 0; i < text.length; i++) {
        let rotated = text.slice(i) + text.slice(0, i);
        rotations.push(rotated);
    }
    return rotations;
}
let text = "hello world";
let bwtResult = bwt(text);
console.log("BWT of '" + text + "': " + bwtResult);
