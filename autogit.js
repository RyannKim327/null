function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
def is_palindrome(s):
    return s == s[::-1]
public boolean isPalindrome(String s) {
    String reversed = new StringBuilder(s).reverse().toString();
    return s.equals(reversed);
}
bool isPalindrome(const std::string& s) {
    std::string reversed = s;
    std::reverse(reversed.begin(), reversed.end());
    return s == reversed;
}
public bool IsPalindrome(string s) {
    char[] arr = s.ToCharArray();
    Array.Reverse(arr);
    return s == new string(arr);
}
def palindrome?(s)
  s == s.reverse
end
func isPalindrome(_ s: String) -> Bool {
    return s == String(s.reversed())
}
function isPalindrome($s) {
    return $s == strrev($s);
}
func isPalindrome(s string) bool {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return s == string(runes)
}
