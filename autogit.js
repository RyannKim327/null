function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
    
    // Check if the lengths of the strings are equal
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    
    // Create character count objects for each string
    const charCount1 = {};
    const charCount2 = {};
    
    for (let char of cleanStr1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }
    
    for (let char of cleanStr2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    
    // Compare character counts
    for (let key in charCount1) {
        if (charCount1[key] !== charCount2[key]) {
            return false;
        }
    }
    
    return true;
}

// Test the function
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
