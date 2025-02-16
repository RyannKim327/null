function isPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters
        while (left < right && !isAlphaNumeric(str[left])) {
            left++;
        }
        while (left < right && !isAlphaNumeric(str[right])) {
            right--;
        }

        // Compare characters
        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function isAlphaNumeric(char: string): boolean {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || // 0-9
           (code >= 65 && code <= 90) || // A-Z
           (code >= 97 && code <= 122);   // a-z
}

// Example usage:
const str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str)); // Output: true
