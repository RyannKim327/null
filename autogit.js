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

const testString = "racecar";
if (isPalindrome(testString)) {
    console.log(`${testString} is a palindrome.`);
} else {
    console.log(`${testString} is not a palindrome.`);
}
