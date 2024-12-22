def boyer_moore_horspool(text, pattern):
    text_length = len(text)
    pattern_length = len(pattern)

    if pattern_length == 0:
        return 0

    bad_character = {}
    for i in range(pattern_length - 1):
        bad_character[ord(pattern[i])] = pattern_length - i - 1

    index = 0
    while index <= text_length - pattern_length:
        skip = 0
        for j in range(pattern_length - 1, -1, -1):
            if text[index + j] != pattern[j]:
                if ord(text[index + j]) in bad_character:
                    skip = bad_character[ord(text[index + j])]
                else:
                    skip = pattern_length
                break

        if skip == 0:
            return index

        index += skip

    return -1

text = "example text for testing"
pattern = "text"
result = boyer_moore_horspool(text, pattern)

if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found")
