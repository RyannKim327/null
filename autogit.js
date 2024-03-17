function checkAnagram(str1, str2) {
    const cleanString = (str) => str.replace(/[^A-Za-z]/g, '').toLowerCase();
    
    str1 = cleanString(str1);
    str2 = cleanString(str2);
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "listen";
const string2 = "silent";

if (checkAnagram(string1, string2)) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}
