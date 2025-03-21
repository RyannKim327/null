function areAnagrams(str1: string, str2: string): boolean {
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

    return cleanStr1 === cleanStr2;
}

const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}
