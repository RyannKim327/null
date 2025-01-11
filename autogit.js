const str = "Hello World";
const noVowels = str.replace(/[aeiou]/gi, "");
console.log(noVowels); // "Hll Wrld"
str = "Hello World"
no_vowels = "".join([c for c in str if c.lower() not in "aeiou"])
print(no_vowels)  # "Hll Wrld"
String str = "Hello World";
String noVowels = str.replaceAll("[aeiou]", "");
System.out.println(noVowels);  // "Hll Wrld"
string str = "Hello World";
string noVowels = new string(str.Where(c => !"aeiou".Contains(char.ToLower(c))).ToArray());
Console.WriteLine(noVowels);  // "Hll Wrld"
str = "Hello World"
no_vowels = str.delete("aeiou")
puts no_vowels  # "Hll Wrld"
let str = "Hello World"
let noVowels = str.replacingOccurrences(of: "[aeiou]", with: "", options: .regularExpression)
print(noVowels)  // "Hll Wrld"
$str = "Hello World";
$noVowels = preg_replace('/[aeiou]/i', '', $str);
echo $noVowels;  // "Hll Wrld"
str := "Hello World"
noVowels := regexp.MustCompile(`[aeiou]`).ReplaceAllString(str, "")
fmt.Println(noVowels)  // "Hll Wrld"
