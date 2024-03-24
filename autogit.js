function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert both strings to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Sort the characters in both strings and compare them
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage
const string1 = "listen";
const string2 = "silent";

if (isAnagram(string1, string2)) {
    console.log(string1 + ' and ' + string2 + ' are anagrams.');
} else {
    console.log(string1 + ' and ' + string2 + ' are not anagrams.');
}
