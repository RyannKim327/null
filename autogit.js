def rabin_karp(pattern, text):
    if not pattern or not text:
        return -1

    d = 256  # size of the alphabet (assuming ASCII characters)
    q = 101  # a prime number

    m = len(pattern)
    n = len(text)
    h = pow(d, m-1) % q
    p = 0  # hash value for pattern
    t = 0  # hash value for text

    # Calculate the hash value of the pattern and the first m characters of text
    for i in range(m):
        p = (d * p + ord(pattern[i])) % q
        t = (d * t + ord(text[i])) % q

    # Slide the pattern over text one by one
    for i in range(n - m + 1):
        # Check if the hash values match, and if the actual strings match
        if p == t and pattern == text[i:i+m]:
            return i

        # Calculate the hash value for the next window of text
        if i < n - m:
            t = (d * (t - ord(text[i]) * h) + ord(text[i+m])) % q
            if t < 0:
                t = t + q

    return -1

# Usage
pattern = "abc"
text = "abcdefg"
result = rabin_karp(pattern, text)
if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found in the text")
