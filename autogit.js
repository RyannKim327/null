function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

    // Check if the lengths of the cleaned strings are the same
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort the characters in the cleaned strings and compare them
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "debit card";
const string2 = "bad credit";

if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
