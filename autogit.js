#include <stdio.h>

int main() {
    int decimal = 12;
    char binary[9]; // 8 bits + null terminator

    sprintf(binary, "%b", decimal);
    printf("%s\n", binary); // Output: 1100

    return 0;
}
#include <bitset>
#include <iostream>

int main() {
    int decimal = 12;
    std::bitset<8> binary(decimal);

    std::cout << binary << std::endl; // Output: 00001100

    return 0;
}
public class DecimalToBinary {
    public static void main(String[] args) {
        int decimal = 12;
        String binary = Integer.toBinaryString(decimal);

        System.out.println(binary); // Output: 1100
    }
}
decimal = 12
binary = bin(decimal)

print(binary)  # Output: 0b1100
let decimal = 12;
let binary = decimal.toString(2);

console.log(binary);  // Output: 1100
decimal = 12
binary = decimal.to_s(2)

puts binary  # Output: 1100
<?php
$decimal = 12;
$binary = sprintf("%b", $decimal);

echo $binary;  // Output: 1100
?>
package main

import "fmt"

func main() {
    decimal := 12
    binary := fmt.Sprintf("%b", decimal)

    fmt.Println(binary)  // Output: 1100
}
