def rabin_karp(pattern, text):
    p_len = len(pattern)
    t_len = len(text)

    if p_len > t_len:
        return None

    # Calculate hash value for pattern and the first window in the text
    pattern_hash = hash(pattern)
    text_hash = hash(text[:p_len])

    for i in range(t_len - p_len + 1):
        # Compare hash values, do full comparison if hash values match
        if pattern_hash == text_hash and pattern == text[i:i + p_len]:
            return i

        # Update the hash value for the next window
        if i < t_len - p_len:
            text_hash = hash(text[i + 1:i + p_len + 1])

    return None

# Example usage
text = "ABABCABABCD"
pattern = "ABCD"
result = rabin_karp(pattern, text)
if result is not None:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")
