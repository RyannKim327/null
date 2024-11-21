def boyer_moore_search(text, pattern):
    pattern_len = len(pattern)
    text_len = len(text)
    if pattern_len == 0:
        return 0
    
    # Generate bad character table
    bad_char = {}
    for i in range(pattern_len):
        bad_char[pattern[i]] = i
    
    # Generate good suffix table
    def generate_suffix_table(pattern):
        table = [0] * (pattern_len + 1)
        i = pattern_len
        j = pattern_len + 1
        table[i] = j
        while i > 0:
            while j <= pattern_len and pattern[i - 1] != pattern[j - 1]:
                if table[j] == 0:
                    table[j] = j - i
                j = table[j]
            i -= 1
            j -= 1
            table[i] = j
        return table
    
    suffix_table = generate_suffix_table(pattern)
    
    # Boyer-Moore search
    i = 0
    while i <= text_len - pattern_len:
        j = pattern_len - 1
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        if j < 0:
            return i
        else:
            bad_char_shift = j - bad_char.get(text[i + j], -1)
            suffix_shift = suffix_table[j + 1]
            i += max(bad_char_shift, suffix_shift)
    
    return -1

# Test the implementation
text = "AABAACAADAABAABA"
pattern = "AABA"
print(boyer_moore_search(text, pattern))  # Output: 0
