def is_palindrome(s):
    s = ''.join(e for e in s if e.isalnum()).lower()
    return s == s[::-1]

# Test the function
print(is_palindrome("A man, a plan, a canal, Panama"))  # Output: True
print(is_palindrome("Hello, World!"))  # Output: False
public class PalindromeChecker {
    public static boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return s.equals(new StringBuilder(s).reverse().toString());
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal, Panama"));  // Output: true
        System.out.println(isPalindrome("Hello, World!"));  // Output: false
    }
}
function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return s === s.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // Output: true
console.log(isPalindrome("Hello, World!"));  // Output: false
