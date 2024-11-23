def rabin_karp(pattern, text):
    prime = 101  # A prime number
    base = 256  # Number of characters in the ASCII table
    pattern_length = len(pattern)
    text_length = len(text)
    pattern_hash = 0
    text_hash = 0
    h = 1

    for i in range(pattern_length - 1):
        h = (h * base) % prime

    for i in range(pattern_length):
        pattern_hash = (base * pattern_hash + ord(pattern[i])) % prime
        text_hash = (base * text_hash + ord(text[i])) % prime

    for i in range(text_length - pattern_length + 1):
        if pattern_hash == text_hash:
            match = True
            for j in range(pattern_length):
                if pattern[j] != text[i + j]:
                    match = False
                    break
            if match:
                print("Pattern found at index", i)

        if i < text_length - pattern_length:
            text_hash = (base * (text_hash - ord(text[i]) * h) + ord(text[i + pattern_length])) % prime
            if text_hash < 0:
                text_hash = text_hash + prime

pattern = "abc"
text = "ababcabcabababd"
rabin_karp(pattern, text)
