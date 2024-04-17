function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Test the function
const word = "racecar";
if (isPalindrome(word)) {
    console.log("'" + word + "' is a palindrome.");
} else {
    console.log("'" + word + "' is not a palindrome.");
}
