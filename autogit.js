def boyer_moore_horspool(text, pattern):
    pattern_length = len(pattern)
    text_length = len(text)

    if pattern_length == 0:
        return 0

    bad_character_table = {}
    
    # Preprocessing the bad character table
    for i in range(pattern_length - 1):
        bad_character_table[pattern[i]] = pattern_length - 1 - i

    idx = 0
    while idx <= text_length - pattern_length:
        j = pattern_length - 1

        while j >= 0 and pattern[j] == text[idx + j]:
            j -= 1

        if j < 0:
            return idx

        if text[idx + pattern_length - 1] in bad_character_table:
            idx += bad_character_table[text[idx + pattern_length - 1]]
        else:
            idx += pattern_length

    return -1

# Test the implementation
text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
pattern = "consectetur"
result = boyer_moore_horspool(text, pattern)

if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")
