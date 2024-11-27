def burrows_wheeler_transform(text):
    text = text + "$"  # Append a special character at the end of the text

    # Generate all possible rotations of the text
    rotations = [text[i:] + text[:i] for i in range(len(text))]

    # Sort the rotations lexicographically
    rotations.sort()

    # Extract the last characters of each rotation to get the Burrows-Wheeler Transform
    bwt = "".join(rotation[-1] for rotation in rotations)

    # Find the index of the original text in the sorted list of rotations
    original_index = rotations.index(text)

    return bwt, original_index

# Example usage
text = "banana"
bwt, original_index = burrows_wheeler_transform(text)
print("Burrows-Wheeler Transform:", bwt)
print("Original text index:", original_index)
