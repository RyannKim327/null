s = "Hello, World!"
lowercase_s = s.lower()
print(lowercase_s)
let s = "Hello, World!";
let lowercase_s = s.toLowerCase();
console.log(lowercase_s);
String s = "Hello, World!";
String lowercase_s = s.toLowerCase();
System.out.println(lowercase_s);
#include <iostream>
#include <algorithm>
#include <cctype>
#include <string>

int main() {
    std::string s = "Hello, World!";
    std::transform(s.begin(), s.end(), s.begin(), ::tolower);
    std::cout << s << std::endl;
    return 0;
}
