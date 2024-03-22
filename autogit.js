function isPalindrome(str) {
    if (!str) {
        return false;
    }
    
    let i = 0;
    let j = str.length - 1;
    
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    
    return true;
}

// Test with a string
const inputString = "racecar";
if (isPalindrome(inputString)) {
    console.log(inputString + " is a palindrome.");
} else {
    console.log(inputString + " is not a palindrome.");
}
