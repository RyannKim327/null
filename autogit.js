def rabin_karp_search(text, pattern):
    p_len = len(pattern)
    t_len = len(text)
    p_hash = hash(pattern)
    t_hash = hash(text[:p_len])

    for i in range(t_len - p_len + 1):
        if p_hash == t_hash and text[i:i+p_len] == pattern:
            return i
        if i < t_len - p_len:
            t_hash = (t_hash - ord(text[i])) // 256 + ord(text[i + p_len]) * 256 ** (p_len - 1)
    return -1

# Example usage
text = "abcdeabcfg"
pattern = "abc"
result = rabin_karp_search(text, pattern)
if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found")
