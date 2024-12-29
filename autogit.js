// Function to reverse a string
string reverseString(string str) {
    int n = str.size();
    for (int i = 0; i < n / 2; i++) {
        swap(str[i], str[n - i - 1]);
    }
    return str;
}

// Example usage
string str = "Hello, World!";
string reversedStr = reverseString(str);
cout << "Reversed string: " << reversedStr << endl;
