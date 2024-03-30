function isAnagram(str1, str2) {
    const cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "Listen";
const string2 = "Silent";
if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
