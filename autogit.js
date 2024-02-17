function isPalindrome(s) {
    if (s === null) {
        return false;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Test the function
let str = "madam";
if (isPalindrome(str)) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
