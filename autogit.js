string = "Hello, World!"
substring = "Hello"

if substring in string:
    print("Substring found!")
string = "Hello, World!"
substring = "Hello"

if string.find(substring) != -1:
    print("Substring found!")
String string = "Hello, World!";
String substring = "Hello";

if (string.contains(substring)) {
    System.out.println("Substring found!");
}
let string = "Hello, World!";
let substring = "Hello";

if (string.includes(substring)) {
    console.log("Substring found!");
}
let string = "Hello, World!";
let substring = "Hello";

if (string.indexOf(substring) !== -1) {
    console.log("Substring found!");
}
#include <iostream>
#include <string>

int main() {
    std::string str = "Hello, World!";
    std::string substr = "Hello";

    if (str.find(substr) != std::string::npos) {
        std::cout << "Substring found!" << std::endl;
    }

    return 0;
}
