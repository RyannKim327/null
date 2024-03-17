function isAnagram(str1, str2) {
    const cleanStr = (str) => str.replace(/[^\w]/g, '').toLowerCase();
    
    const sortedStr1 = cleanStr(str1).split('').sort().join('');
    const sortedStr2 = cleanStr(str2).split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

const string1 = 'listen';
const string2 = 'silent';

if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
