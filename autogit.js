# Using the 'in' keyword
string = "Hello, World!"
substring = "Hello"
if substring in string:
    print("Substring found in the string")
else:
    print("Substring not found in the string")
// Using the 'includes' method
let string = "Hello, World!";
let substring = "Hello";
if (string.includes(substring)) {
    console.log("Substring found in the string");
} else {
    console.log("Substring not found in the string");
}
// Using the 'contains' method
String string = "Hello, World!";
String substring = "Hello";
if (string.contains(substring)) {
    System.out.println("Substring found in the string");
} else {
    System.out.println("Substring not found in the string");
}
#include <iostream>
#include <string>

int main() {
    std::string string = "Hello, World!";
    std::string substring = "Hello";
    if (string.find(substring) != std::string::npos) {
        std::cout << "Substring found in the string" << std::endl;
    } else {
        std::cout << "Substring not found in the string" << std::endl;
    }
    return 0;
}
