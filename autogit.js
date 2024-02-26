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

let input = "madam";
if (isPalindrome(input)) {
    console.log(input + " is a palindrome.");
} else {
    console.log(input + " is not a palindrome.");
}
