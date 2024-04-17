function areAnagrams(str1, str2) {
    const sanitizeString = (str) => str.toLowerCase().replace(/[^a-z]/g, '');
  
    const sortedStr1 = sanitizeString(str1).split('').sort().join('');
    const sortedStr2 = sanitizeString(str2).split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
