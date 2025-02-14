function areAnagrams(str1: string, str2: string): boolean {
    const formatString = (str: string): string => {
        return str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    };

    return formatString(str1) === formatString(str2);
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true
