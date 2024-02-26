
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // If characters at left and right index don't match, it's not a palindrome
        }

        left++;
        right--;
    }
    
    return true;
}

// Test the function
const inputString = "racecar";
if (isPalindrome(inputString)) {
    console.log(`${inputString} is a palindrome.`);
} else {
    console.log(`${inputString} is not a palindrome.`);
}

