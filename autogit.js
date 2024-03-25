function isAnagram(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Sort the characters in the strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Test the function
const str1 = "listen";
const str2 = "silent";

if (isAnagram(str1, str2)) {
    console.log(`${str1} and ${str2} are anagrams.`);
} else {
    console.log(`${str1} and ${str2} are not anagrams.`);
}
