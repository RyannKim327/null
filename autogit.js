my_string = "123"
my_integer = int(my_string)
print(my_integer)
String myString = "123";
int myInteger = Integer.parseInt(myString);
System.out.println(myInteger);
#include <iostream>
#include <string>
#include <sstream>

int main() {
    std::string myString = "123";
    int myInteger;
    std::istringstream(myString) >> myInteger;
    std::cout << myInteger << std::endl;
    return 0;
}
let myString = "123";
let myInteger = parseInt(myString);
console.log(myInteger);
