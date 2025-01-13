function firstRepeatedCharacter(str) {
  const charSet = new Set();
  for (const char of str) {
    if (charSet.has(char)) return char;
    charSet.add(char);
  }
  return null;
}
def first_repeated_character(s):
    seen = set()
    for char in s:
        if char in seen:
            return char
        seen.add(char)
    return None
public static char firstRepeatedCharacter(String str) {
    Set<Character> charSet = new HashSet<>();
    for (char c : str.toCharArray()) {
        if (charSet.contains(c)) return c;
        charSet.add(c);
    }
    return null;
}
char firstRepeatedCharacter(string str) {
    unordered_set<char> charSet;
    for (char c : str) {
        if (charSet.find(c) != charSet.end()) return c;
        charSet.insert(c);
    }
    return '\0';
}
def first_repeated_character(str)
  seen = Set.new
  str.each_char do |char|
    return char if seen.include?(char)
    seen << char
  end
  nil
end
public static char FirstRepeatedCharacter(string str)
{
    var charSet = new HashSet<char>();
    foreach (char c in str)
    {
        if (charSet.Contains(c)) return c;
        charSet.Add(c);
    }
    return '\0';
}
