my_string = "hello"
reversed_string = my_string[::-1]
print(reversed_string)  # Output: "olleh"
let myString = "hello";
let reversedString = myString.split("").reverse().join("");
console.log(reversedString);  // Output: "olleh"
String myString = "hello";
String reversedString = new StringBuilder(myString).reverse().toString();
System.out.println(reversedString);  // Output: "olleh"
#include <string>
#include <algorithm>

std::string myString = "hello";
std::reverse(myString.begin(), myString.end());
std::cout << myString << std::endl;  // Output: "olleh"
string myString = "hello";
char[] arr = myString.ToCharArray();
Array.Reverse(arr);
string reversedString = new string(arr);
Console.WriteLine(reversedString);  // Output: "olleh"
my_string = "hello"
reversed_string = my_string.reverse
puts reversed_string  # Output: "olleh"
let myString = "hello"
let reversedString = String(myString.characters.reversed())
print(reversedString)  // Output: "olleh"
$myString = "hello";
$reversedString = strrev($myString);
echo $reversedString;  // Output: "olleh"
package main

import "fmt"

func reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

func main() {
    myString := "hello"
    reversedString := reverse(myString)
    fmt.Println(reversedString)  // Output: "olleh"
}
my_string <- "hello"
reversed_string <- paste(rev(strsplit(my_string, "")[[1]]), collapse = "")
print(reversed_string)  # Output: "olleh"
