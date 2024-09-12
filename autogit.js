def build_bad_match_table(pattern):
    table = {}
    pattern_length = len(pattern)
    for i in range(pattern_length - 1):
        table[pattern[i]] = pattern_length - i - 1
    return table

def boyer_moore_horspool(text, pattern):
    bad_match_table = build_bad_match_table(pattern)
    text_length = len(text)
    pattern_length = len(pattern)
    i = pattern_length - 1

    while i < text_length:
        j = pattern_length - 1
        while j >= 0 and text[i] == pattern[j]:
            i -= 1
            j -= 1
        if j == -1:
            return i + 1
        if text[i] in bad_match_table:
            i += bad_match_table[text[i]]
        else:
            i += pattern_length

    return -1

# Test
text = "the quick brown fox jumps over the lazy dog"
pattern = "fox"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print(f"Pattern found at index: {result}")
else:
    print("Pattern not found")
