def rabin_karp(text, pattern):
    if not text or not pattern:
        return -1

    base = 256  # number of characters in the input alphabet
    prime = 101  # a prime number

    n = len(text)
    m = len(pattern)
    pattern_hash = 0
    text_hash = 0
    h = 1

    if m > n:
        return -1

    for i in range(m - 1):
        h = (h * base) % prime

    for i in range(m):
        pattern_hash = (base * pattern_hash + ord(pattern[i])) % prime
        text_hash = (base * text_hash + ord(text[i])) % prime

    for i in range(n - m + 1):
        if pattern_hash == text_hash:
            match = True
            for j in range(m):
                if pattern[j] != text[i + j]:
                    match = False
                    break
            if match:
                return i
        if i < n - m:
            text_hash = (base * (text_hash - ord(text[i]) * h) + ord(text[i + m])) % prime
            if text_hash < 0:
                text_hash += prime

    return -1

text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
index = rabin_karp(text, pattern)
if index != -1:
    print("Pattern found at index:", index)
else:
    print("Pattern not found")
