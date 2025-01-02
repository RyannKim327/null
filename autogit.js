def rabin_karp_search(text, pattern):
    # Define constants (you can choose your own prime number and base)
    prime = 101
    base = 256
    pattern_hash = 0
    text_hash = 0
    hash_multiplier = 1
    
    # Calculate hash multiplier
    for i in range(len(pattern) - 1):
        hash_multiplier = (hash_multiplier * base) % prime
    
    # Calculate hash values for pattern and first window in text
    for i in range(len(pattern)):
        pattern_hash = (base * pattern_hash + ord(pattern[i])) % prime
        text_hash = (base * text_hash + ord(text[i])) % prime
    
    # Slide pattern over text and compare hashes
    for i in range(len(text) - len(pattern) + 1):
        if pattern_hash == text_hash and text[i:i+len(pattern)] == pattern:
            return i
        
        if i < len(text) - len(pattern):
            text_hash = (base * (text_hash - ord(text[i]) * hash_multiplier) + ord(text[i + len(pattern)])) % prime
            text_hash = (text_hash + prime) % prime
        
    return -1  # Pattern not found

# Test the implementation
text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
result = rabin_karp_search(text, pattern)
print("Pattern found at index:", result)
