function isPalindrome(str: string): boolean {
    const reversedStr = str.split('').reverse().join('');
    return str.toLowerCase() === reversedStr.toLowerCase();
}
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false
