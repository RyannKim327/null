def burrows_wheeler_transform(text):
    text = text + "$"  # Add a special character to the end of the text
    n = len(text)
    
    rotations = [text[i:n] + text[0:i] for i in range(n)]  # Generate all cyclic rotations of the text
    rotations.sort()  # Sort the rotations
    
    transformed_text = ''.join(rotation[-1] for rotation in rotations)  # Extract the last characters of the rotations
    
    return transformed_text, rotations.index(text)

# Example usage
text = "banana"
transformed_text, index = burrows_wheeler_transform(text)
print("Transformed text:", transformed_text)
print("Index of original text:", index)
