def rabin_karp_search(text, pattern):
    text_length = len(text)
    pattern_length = len(pattern)
    prime = 101  # A prime number to use for hashing
    text_hash = 0
    pattern_hash = 0
    h = 1

    # calculate the hash for the pattern and the first window of text
    for i in range(pattern_length - 1):
        h = (h * 256) % prime
    for i in range(pattern_length):
        pattern_hash = (256 * pattern_hash + ord(pattern[i])) % prime
        text_hash = (256 * text_hash + ord(text[i])) % prime

    # slide the pattern over the text and compare hashes
    for i in range(text_length - pattern_length + 1):
        if text_hash == pattern_hash:
            match = True
            for j in range(pattern_length):
                if text[i + j] != pattern[j]:
                    match = False
                    break
            if match:
                print("Pattern found at index", i)
        if i < text_length - pattern_length:
            text_hash = (256 * (text_hash - ord(text[i]) * h) + ord(text[i + pattern_length])) % prime
            if text_hash < 0:
                text_hash = text_hash + prime

if __name__ == "__main__":
    text = "AABAACAADAABAABA"
    pattern = "AABA"
    rabin_karp_search(text, pattern)
