def preprocess(pattern):
    skip_table = {}
    pattern_len = len(pattern)
    
    for i in range(pattern_len - 1):
        skip_table[pattern[i]] = pattern_len - i - 1
    
    return skip_table

def boyer_moore_horspool(text, pattern):
    text_len = len(text)
    pattern_len = len(pattern)
    skip_table = preprocess(pattern)
    
    i = pattern_len - 1
    while i < text_len:
        j = pattern_len - 1
        while text[i] == pattern[j]:
            if j == 0:
                return i
            i -= 1
            j -= 1
        i += skip_table.get(text[i], pattern_len)
    
    return -1

# Test the algorithm
text = "hello world this is a test"
pattern = "world"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found")
