function isAnagram(str1, str2) {
    // Remove spaces and punctuation, and convert to lowercase
    const cleanString = (str) => str.replace(/[^\w]/g, '').toLowerCase();

    // Clean and sort the characters in both strings
    const sortedStr1 = cleanString(str1).split('').sort().join('');
    const sortedStr2 = cleanString(str2).split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "listen";
const string2 = "silent";
if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
