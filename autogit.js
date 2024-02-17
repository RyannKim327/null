function checkAnagrams(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of the strings and compare
    if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
        return true;
    } else {
        return false;
    }
}

// Test the function with two strings
const string1 = "listen";
const string2 = "silent";

if (checkAnagrams(string1, string2)) {
    console.log(`"${string1}" and "${string2}" are anagrams.`);
} else {
    console.log(`"${string1}" and "${string2}" are not anagrams.`);
}
