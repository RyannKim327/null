def burrows_wheeler_transform(text):
    text = text + "$"  # Adding an end of text symbol
    rotations = [text[i:] + text[:i] for i in range(len(text))]  # Generating all rotations of the text
    rotations.sort()  # Sorting the rotations
    bwt_text = "".join(rotation[-1] for rotation in rotations)  # Taking the last character of each rotation
    return bwt_text

# Example usage
text = "banana"
bwt_result = burrows_wheeler_transform(text)
print("Burrows-Wheeler Transform of '{}' is '{}'".format(text, bwt_result))
