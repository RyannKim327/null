my_str = "123"
my_int = int(my_str)
#include <iostream>
#include <sstream>

int main() {
  std::string my_str = "123";
  int my_int;
  std::stringstream(my_str) >> my_int;
  return 0;
}
String my_str = "123";
int my_int = Integer.parseInt(my_str);
const my_str = "123";
const my_int = parseInt(my_str);
$my_str = "123";
$my_int = (int) $my_str;
let my_str = "123"
let my_int = Int(my_str)!
package main

import (
	"fmt"
	"strconv"
)

func main() {
	my_str := "123"
	my_int, err := strconv.Atoi(my_str)
	if err != nil {
		fmt.Println("Error converting string to integer:", err)
	}
}
my_str = "123"
my_int = my_str.to_i
