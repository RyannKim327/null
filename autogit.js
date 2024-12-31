str = "Hello, World!"
lowercase_str = str.lower()
print(lowercase_str)
var str = "Hello, World!";
var lowercase_str = str.toLowerCase();
console.log(lowercase_str);
String str = "Hello, World!";
String lowercaseStr = str.toLowerCase();
System.out.println(lowercaseStr);
#include <iostream>
#include <algorithm>
#include <string>

int main() {
    std::string str = "Hello, World!";
    std::transform(str.begin(), str.end(), str.begin(),
                   [](unsigned char c){ return std::tolower(c); });
    std::cout << str << std::endl;
    return 0;
}
using System;

class Program
{
    static void Main()
    {
        string str = "Hello, World!";
        string lowercaseStr = str.ToLower();
        Console.WriteLine(lowercaseStr);
    }
}
$str = "Hello, World!";
$lowercase_str = strtolower($str);
echo $lowercase_str;
