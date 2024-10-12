# Rabin-Karp Algorithm for String Searching
def rabin_karp(text, pattern):
    n = len(text)
    m = len(pattern)
    pattern_hash = hash(pattern)
    text_hash = hash(text[:m])
    
    for i in range(n - m + 1):
        if i > 0:
            # Update rolling hash
            text_hash = (text_hash - ord(text[i - 1])) // 10 + ord(text[i + m - 1]) * 10 ** (m - 1)
            
        if text_hash == pattern_hash:
            if text[i:i+m] == pattern:
                return i
    return -1

# Example usage
text = "ABABCABABCD"
pattern = "ABCD"
result = rabin_karp(text, pattern)
if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found")
