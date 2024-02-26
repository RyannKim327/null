function isAnagram(str1, str2) {
    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
    
    // Check if the lengths of the cleaned strings are equal
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    
    // Sort the characters in the cleaned strings and compare them
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

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
