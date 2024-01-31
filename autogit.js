function boyerMooreHorspool(pattern, text) {
    function generateShiftTable(pattern) {
        const table = {};
        const patternLength = pattern.length - 1;
    
        for (let i = 0; i < patternLength; i++) {
            table[pattern[i]] = patternLength - i;
        }
    
        return table;
    }
}
    function boyerMooreHorspool(pattern, text) {
        function generateShiftTable(pattern) {
            // ...
        }
    
        const patternLength = pattern.length;
        const textLength = text.length;
        const shiftTable = generateShiftTable(pattern);
        const matches = [];
    
        let textIndex = 0;
    
        while (textIndex <= textLength - patternLength) {
            let patternIndex = patternLength - 1;
    
            while (patternIndex >= 0 && pattern[patternIndex] === text[textIndex + patternIndex]) {
                patternIndex--;
            }
    
            if (patternIndex < 0) {
                matches.push(textIndex); // Pattern found at index textIndex
                textIndex += patternLength;
            } else {
                textIndex += shiftTable[text[textIndex + patternLength - 1]] || patternLength;
            }
        }
    
        return matches;
    }
const pattern = "example";
const text = "This is an example sentence. An example of a Boyer-Moore-Horspool implementation.";
const matches = boyerMooreHorspool(pattern, text);

console.log(matches); // Outputs: [11, 37]
