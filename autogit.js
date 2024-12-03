my_string = "Hello, World!"
lowercase_string = my_string.lower()
print(lowercase_string)
String myString = "Hello, World!";
String lowercaseString = myString.toLowerCase();
System.out.println(lowercaseString);
let myString = "Hello, World!";
let lowercaseString = myString.toLowerCase();
console.log(lowercaseString);
#include <iostream>
#include <algorithm>
#include <string>

using namespace std;

int main() {
    string myString = "Hello, World!";
    transform(myString.begin(), myString.end(), myString.begin(), ::tolower);
    cout << myString << endl;
    return 0;
}
using System;

class Program
{
    static void Main()
    {
        string myString = "Hello, World!";
        string lowercaseString = myString.ToLower();
        Console.WriteLine(lowercaseString);
    }
}
