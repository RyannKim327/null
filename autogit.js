def rabin_karp(text, pattern):
    n = len(text)
    m = len(pattern)
    q = 101  # Prime number for hashing
    d = 256  # Number of characters in the input alphabet

    h = pow(d, m-1, q)
    p = 0
    t = 0
    result = []

    # Compute the hash value of the pattern and first window of text
    for i in range(m):
        p = (d*p + ord(pattern[i])) % q
        t = (d*t + ord(text[i])) % q

    # Slide the pattern over the text one by one
    for i in range(n-m+1):
        if p == t:  # Check hash values
            if pattern == text[i:i+m]:  # Check for false positives
                result.append(i)

        if i < n-m:
            t = (d*(t - ord(text[i])*h) + ord(text[i+m])) % q
            if t < 0:
                t = t + q

    return result
