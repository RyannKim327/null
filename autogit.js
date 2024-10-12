def preprocess_bad_character_table(pattern):
    table = {}
    pattern_length = len(pattern)
    
    for i in range(pattern_length - 1):
        table[pattern[i]] = pattern_length - 1 - i
        
    return table

def boyer_moore_horspool(text, pattern):
    text_length = len(text)
    pattern_length = len(pattern)
    
    if pattern_length == 0:
        return 0
    
    bad_character_table = preprocess_bad_character_table(pattern)
    
    i = pattern_length - 1
    
    while i < text_length:
        j = pattern_length - 1
        while j >= 0 and text[i] == pattern[j]:
            i -= 1
            j -= 1
        
        if j == -1:
            return i + 1
        
        bad_character_rule = bad_character_table.get(text[i], pattern_length)
        i += max(1, bad_character_rule)
    
    return -1

# Example usage
text = "ABAAABCD"
pattern = "ABC"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")
