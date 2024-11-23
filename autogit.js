def rabin_karp_search(text, pattern):
    d = 256  # Number of characters in the input alphabet
    q = 101  # A prime number for hashing

    M = len(pattern)
    N = len(text)
    pattern_hash = 0
    text_hash = 0
    h = 1

    # Calculate h = d^(M-1) % q
    for i in range(M - 1):
        h = (h * d) % q

    # Calculate the initial hash values for pattern and window of text
    for i in range(M):
        pattern_hash = (d * pattern_hash + ord(pattern[i])) % q
        text_hash = (d * text_hash + ord(text[i])) % q

    # Slide the pattern over text one by one
    for i in range(N - M + 1):
        # Check if the hash value of pattern and current window of text matches
        if pattern_hash == text_hash:
            # Check character by character if the strings match
            match = True
            for j in range(M):
                if text[i + j] != pattern[j]:
                    match = False
                    break
            if match:
                print("Pattern found at index", i)

        # Calculate hash value for next window of text
        if i < N - M:
            text_hash = (d * (text_hash - ord(text[i]) * h) + ord(text[i + M])) % q
            if text_hash < 0:
                text_hash = text_hash + q

# Test the Rabin-Karp search algorithm
text = "ABCCDDAEFG"
pattern = "CDD"
rabin_karp_search(text, pattern)
