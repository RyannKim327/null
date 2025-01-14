function firstRepeatedCharacter(str) {
  const charSet = new Set();
  for (let char of str) {
    if (charSet.has(char)) return char;
    charSet.add(char);
  }
  return null; // or undefined, if you prefer
}
def first_repeated_character(s):
    seen = set()
    for char in s:
        if char in seen:
            return char
        seen.add(char)
    return None  # or NoneType, if you prefer
public static char firstRepeatedCharacter(String str) {
  Set<Character> charSet = new HashSet<>();
  for (char c : str.toCharArray()) {
    if (charSet.contains(c)) return c;
    charSet.add(c);
  }
  return null; // or Character.MIN_VALUE, if you prefer
}
#include <unordered_set>

char firstRepeatedCharacter(const std::string& str) {
  std::unordered_set<char> charSet;
  for (char c : str) {
    if (charSet.find(c) != charSet.end()) return c;
    charSet.insert(c);
  }
  return '\0'; // or some other default value, if you prefer
}
def first_repeated_character(str)
  seen = Set.new
  str.each_char do |char|
    return char if seen.include?(char)
    seen << char
  end
  nil  # or some other default value, if you prefer
end
