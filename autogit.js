def preprocess_pattern(pattern):
    table = {}
    m = len(pattern)
    
    for i in range(m - 1):
        table[pattern[i]] = m - 1 - i
    
    return table

def boyer_moore_horspool(text, pattern):
    n = len(text)
    m = len(pattern)
    
    if m == 0:
        return 0
    
    skip_table = preprocess_pattern(pattern)
    
    i = 0
    while i <= n - m:
        j = m - 1
        
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        
        if j == -1:
            return i
        
        if text[i + m - 1] in skip_table:
            i += skip_table[text[i + m - 1]]
        else:
            i += m
    
    return -1

# Example usage
text = "ABAAABCD"
pattern = "ABC"
index = boyer_moore_horspool(text, pattern)

if index != -1:
    print("Pattern found at index:", index)
else:
    print("Pattern not found")
