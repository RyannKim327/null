def bad_character_table(pattern):
    table = {}
    pattern_length = len(pattern)
    for i in range(pattern_length - 1):
        table[pattern[i]] = pattern_length - 1 - i
    return table

def boyer_moore_horspool(text, pattern):
    text_length = len(text)
    pattern_length = len(pattern)
    if text_length < pattern_length:
        return -1

    bad_char_table = bad_character_table(pattern)
    
    i = 0
    while i <= text_length - pattern_length:
        j = pattern_length - 1
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        if j == -1:
            return i
        else:
            shift = bad_char_table.get(text[i + j], pattern_length)
            i += shift

    return -1

text = "ABAAABCDBBABCDDEBCABC"
pattern = "BCD"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")
