def build_bad_match_table(pattern):
    table = {}
    pattern_length = len(pattern)
    for i in range(pattern_length - 1):
        table[pattern[i]] = pattern_length - 1 - i
    return table

def boyer_moore_horspool(text, pattern):
    pattern_length = len(pattern)
    text_length = len(text)
    bad_match_table = build_bad_match_table(pattern)
    i = pattern_length - 1

    while i < text_length:
        k = 0
        while k < pattern_length and text[i - k] == pattern[pattern_length - 1 - k]:
            k += 1
        if k == pattern_length:
            return i - pattern_length + 1
        else:
            i += bad_match_table.get(text[i], pattern_length)

    return -1

text = "exampletextforpatternsearchingexample"
pattern = "search"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")
