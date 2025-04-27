function isPalindrome(str: string): boolean {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Check if the cleaned string is the same as its reverse
    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}
