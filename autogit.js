const originalString = "hello";
const reversedString = originalString.split("").reverse().join("");
console.log(reversedString); // Output: "olleh"
original_string = "hello"
reversed_string = original_string[::-1]
print(reversed_string)  # Output: "olleh"
String originalString = "hello";
String reversedString = new StringBuilder(originalString).reverse().toString();
System.out.println(reversedString);  // Output: "olleh"
#include <string>
#include <algorithm>

int main() {
    std::string originalString = "hello";
    std::reverse(originalString.begin(), originalString.end());
    std::cout << originalString << std::endl;  // Output: "olleh"
    return 0;
}
original_string = "hello"
reversed_string = original_string.reverse
puts reversed_string  # Output: "olleh"
let originalString = "hello"
let reversedString = String(originalString.reversed())
print(reversedString)  // Output: "olleh"
(original_string = "hello";
reversed_string = strrev(original_string);
echo $reversed_string;  // Output: "olleh"
package main

import (
	"fmt"
	"unicode/utf8"
)

func reverse(s string) string {
	r := []rune(s)
 utf8.RuneCountInString(s)
	for i, j := 0, len(r)-1; i < j; i, j = i+1, j-1 {
		r[i], r[j] = r[j], r[i]
	}
	return string(r)
}

func main() {
	originalString := "hello"
	reversedString := reverse(originalString)
	fmt.Println(reversedString)  // Output: "olleh"
}
fn main() {
    let original_string = "hello";
    let reversed_string: String = original_string.chars().rev().collect();
    println!("{}", reversed_string);  // Output: "olleh"
}
