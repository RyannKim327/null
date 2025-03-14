function firstRepeatedChar(str: string): string | null {
    const charSet = new Set<string>();
    
    for (const char of str) {
        if (charSet.has(char)) {
            return char;
        }
        charSet.add(char);
    }
    
    return null;
}

// Example usage
console.log(firstRepeatedChar("abcdefga")); // Returns 'a'
console.log(firstRepeatedChar("abcdef")); // Returns null
function firstRepeatedChar(str: string): string | null {
    const charMap: { [key: string]: boolean } = {};
    
    for (const char of str) {
        if (charMap[char]) {
            return char;
        }
        charMap[char] = true;
    }
    
    return null;
}
function firstRepeatedChar(str: string): string | null {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== i) {
            return str[i];
        }
    }
    
    return null;
}
function findFirstRepeatedChar(str: string): { 
    char: string | null, 
    index: number 
} {
    const charMap = new Map<string, number>();
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (charMap.has(char)) {
            return { 
                char, 
                index: charMap.get(char)! 
            };
        }
        
        charMap.set(char, i);
    }
    
    return { 
        char: null, 
        index: -1 
    };
}

// Example usage
const result = findFirstRepeatedChar("abcdefga");
console.log(result); 
// Outputs: { char: 'a', index: 0 }
