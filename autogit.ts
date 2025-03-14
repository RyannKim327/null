function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
function isPalindrome(str: string): boolean {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
function isPalindrome(str: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let left = 0;
    let right = cleanedStr.length - 1;
    
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

console.log(isPalindrome('race a car')); // true
function isPalindrome(str: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    function checkPalindrome(s: string): boolean {
        // Base cases
        if (s.length <= 1) return true;
        
        // Compare first and last characters
        if (s[0] !== s[s.length - 1]) return false;
        
        // Recursively check inner substring
        return checkPalindrome(s.slice(1, -1));
    }
    
    return checkPalindrome(cleanedStr);
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
