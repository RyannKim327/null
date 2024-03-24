function isAnagram(str1, str2) {
    //Remove non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

    //Check if the sorted strings are equal
    return cleanStr1 === cleanStr2;
}

// Test the function
const string1 = "Listen";
const string2 = "Silent";
if (isAnagram(string1, string2)) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}
