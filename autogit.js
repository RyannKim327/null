function isAnagram(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

    // Split the strings into arrays of characters, sort, and join back into strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the two sorted strings
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
