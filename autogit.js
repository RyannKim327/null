# Rabin-Karp Algorithm for string searching

def rabin_karp(text, pattern):
    text_len = len(text)
    pattern_len = len(pattern)

    # Calculate the hash value of pattern and the first window of text
    pattern_hash = sum(ord(pattern[i]) for i in range(pattern_len))
    window_hash = sum(ord(text[i]) for i in range(pattern_len))

    for i in range(text_len - pattern_len + 1):
        # Check if the hash values match, and if the substrings match
        if pattern_hash == window_hash and text[i:i + pattern_len] == pattern:
            print("Pattern found at index:", i)

        # Update the rolling hash value for the next window
        if i < text_len - pattern_len:
            window_hash = window_hash - ord(text[i]) + ord(text[i + pattern_len])

# Test the algorithm
text = "ABCCDDAEFGD"
pattern = "CDD"
rabin_karp(text, pattern)
