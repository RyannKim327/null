function burrowsWheelerTransform(input) {
    let suffixes = [];
    for (let i = 0; i < input.length; i++) {
        let suffix = input.substring(i) + input.substring(0, i);
        suffixes.push(suffix);
    }

    suffixes.sort();
    let transformed = "";
    for (let i = 0; i < suffixes.length; i++) {
        transformed += suffixes[i].charAt(input.length - 1);
    }

    return transformed;
}

function burrowsWheelerInverseTransform(input) {
    let table = [];
    for (let i = 0; i < input.length; i++) {
        table.push({ index: i, suffix: "" });
    }

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            table[j].suffix = input.charAt(j) + table[j].suffix;
        }
        table.sort((a, b) => a.suffix.localeCompare(b.suffix));
    }

    return table.find(entry => entry.suffix.endsWith("$")).suffix.slice(0, -1);
}

// Example usage
let input = "banana";
let transformed = burrowsWheelerTransform(input);
console.log("Transformed: ", transformed);

let original = burrowsWheelerInverseTransform(transformed);
console.log("Original: ", original);
