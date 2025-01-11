const str = "hello world";
const reversed = str.split(" ").reverse().join(" ");
console.log(reversed); // output: "world hello"
str = "hello world"
reversed = " ".join(str.split(" ")[::-1])
print(reversed)  # output: "world hello"
String str = "hello world";
String[] words = str.split(" ");
String reversed = "";
for (int i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + " ";
}
System.out.println(reversed.trim()); // output: "world hello"
string str = "hello world";
string[] words = str.Split(' ');
Array.Reverse(words);
string reversed = string.Join(" ", words);
Console.WriteLine(reversed); // output: "world hello"
str = "hello world"
reversed = str.split(" ").reverse.join(" ")
puts reversed  # output: "world hello"
let str = "hello world"
let reversed = str.components(separatedBy: " ").reversed().joined(separator: " ")
print(reversed)  // output: "world hello"
