s = "123"  # your string
num = int(s)  # convert string to integer
print(num)
String s = "123";  // your string
int num = Integer.parseInt(s);  // convert string to integer
System.out.println(num);
var s = "123";  // your string
var num = parseInt(s);  // convert string to integer
console.log(num);
#include <iostream>
#include <string>
#include <sstream>

int main() {
    std::string s = "123";  // your string
    int num;
    std::istringstream(s) >> num;  // convert string to integer
    std::cout << num << std::endl;
    return 0;
}
using System;

class MainClass {
    public static void Main (string[] args) {
        string s = "123";  // your string
        int num = Convert.ToInt32(s);  // convert string to integer
        Console.WriteLine(num);
    }
}
