function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while(left < right) {
        if(str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Test the function
const testStr = "racecar";
if(isPalindrome(testStr)) {
    console.log(`${testStr} is a palindrome`);
} else {
    console.log(`${testStr} is not a palindrome`);
}
