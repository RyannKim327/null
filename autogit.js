string = "  Hello, World!  "
new_string = string.strip()
print(new_string)
let string = "  Hello, World!  ";
let new_string = string.trim();
console.log(new_string);
String string = "  Hello, World!  ";
String newString = string.trim();
System.out.println(newString);
#include <iostream>
#include <algorithm>
#include <cctype>
#include <string>

int main() {
    std::string str = "  Hello, World!  ";
    str.erase(std::remove_if(str.begin(), str.end(), ::isspace), str.end());
    std::cout << str << std::endl;
    return 0;
}
string = "  Hello, World!  "
new_string = string.strip
puts new_string
package main

import (
	"fmt"
	"strings"
)

func main() {
	str := "  Hello, World!  "
	newStr := strings.TrimSpace(str)
	fmt.Println(newStr)
}
