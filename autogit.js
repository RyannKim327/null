function isAnagram(str1, str2) {
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    }

    return sanitizeString(str1) === sanitizeString(str2);
}

// Example usage
const str1 = "listen";
const str2 = "silent";

if(isAnagram(str1, str2)) {
    console.log(`${str1} and ${str2} are anagrams.`);
} else {
    console.log(`${str1} and ${str2} are not anagrams.`);
}
