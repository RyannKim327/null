def burrows_wheeler_transform(text):
    text += "$"  # Add a unique character not present in the text
    rotations = [text[i:] + text[:i] for i in range(len(text))]  # Generate rotations of the text
    rotations.sort()  # Sort the rotations lexicographically
    transformed_text = "".join(rotation[-1] for rotation in rotations)  # Extract the last character of each rotation
    index = rotations.index(text)  # Find the index of the original text in the sorted rotations
    return transformed_text, index

# Example usage
text = "banana"
transformed_text, index = burrows_wheeler_transform(text)
print("Transformed text:", transformed_text)
print("Index of original text:", index)
