function isAnagram(str1, str2) {
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    }

    return sanitizeString(str1) === sanitizeString(str2);
}

// Test the function
const string1 = "listen";
const string2 = "silent";

if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams!`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
