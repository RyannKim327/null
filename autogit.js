function rabinKarpSearch(text, pattern) {
    const prime = 101; // prime number used for hashing

    function calculateHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i) * Math.pow(prime, i);
        }
        return hash;
    }

    function reCalculateHash(oldHash, oldChar, newChar, patternLength) {
        return (oldHash - oldChar.charCodeAt(0)) / prime + newChar.charCodeAt(0) * Math.pow(prime, patternLength - 1);
    }

    function checkEqual(str1, start1, end1, str2, start2, end2) {
        if (end1 - start1 !== end2 - start2) {
            return false;
        }

        while (start1 <= end1 && start2 <= end2) {
            if (str1[start1] !== str2[start2]) {
                return false;
            }
            start1++;
            start2++;
        }

        return true;
    }

    const textLength = text.length;
    const patternLength = pattern.length;
    const patternHash = calculateHash(pattern);
    let textHash = calculateHash(text.substring(0, patternLength));

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash && checkEqual(text, i, i + patternLength - 1, pattern, 0, patternLength - 1)) {
            return i;
        }

        if (i < textLength - patternLength) {
            textHash = reCalculateHash(textHash, text[i], text[i + patternLength], patternLength);
        }
    }

    return -1; // pattern not found in text
}

let text = "ABCCDDAEFG";
let pattern = "CDD";
console.log("Pattern found at index:", rabinKarpSearch(text, pattern));
