function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    const charMap = {};

    for (let char of str1) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char of str2) {
        if (!charMap[char]) {
            return false;
        } else {
            charMap[char]--;
        }
    }

    return true;
}

// Example usage
const string1 = "listen";
const string2 = "silent";

if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
