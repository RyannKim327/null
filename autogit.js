my_string = "Hello, World!"
lower_string = my_string.lower()
print(lower_string)
let myString = "Hello, World!";
let lowerString = myString.toLowerCase();
console.log(lowerString);
String myString = "Hello, World!";
String lowerString = myString.toLowerCase();
System.out.println(lowerString);
#include <iostream>
#include <algorithm>
#include <cctype>
#include <string>

int main()
{
    std::string myString = "Hello, World!";
    std::transform(myString.begin(), myString.end(), myString.begin(), ::tolower);
    std::cout << myString << std::endl;
    return 0;
}
