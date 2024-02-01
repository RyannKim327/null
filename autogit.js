function isAnagram(str1, str2) {
    // convert strings to lowercase and remove spaces/punctuation
    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

    // sort the strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// example usage
const string1 = "listen";
const string2 = "silent";

if (isAnagram(string1, string2)) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}
