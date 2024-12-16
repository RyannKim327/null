def build_bad_match_table(pattern):
    bad_match_table = {}
    pattern_length = len(pattern)
    
    for i in range(pattern_length - 1):
        bad_match_table[pattern[i]] = pattern_length - i - 1
    
    return bad_match_table

def boyer_moore_horspool(text, pattern):
    bad_match_table = build_bad_match_table(pattern)
    text_length = len(text)
    pattern_length = len(pattern)
    
    if pattern_length > text_length:
        return -1
    
    skip = 0
    while text_length - skip >= pattern_length:
        match = True
        for i in range(pattern_length - 1, -1, -1):
            if pattern[i] != text[skip + i]:
                if text[skip + i] in bad_match_table:
                    skip += bad_match_table[text[skip + i]]
                else:
                    skip += pattern_length
                match = False
                break
        
        if match:
            return skip
        
    return -1

# Example usage
text = "This is an example text for string searching"
pattern = "example"
result = boyer_moore_horspool(text, pattern)

if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")
