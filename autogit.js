def burrows_wheeler_transform(text):
    text += '$'  # Add a marker character
    rotations = [text[i:] + text[:i] for i in range(len(text))]  # Generate all cyclic rotations of the text
    rotations.sort()  # Sort the rotations lexicographically

    transformed_text = ''.join(rotation[-1] for rotation in rotations)  # Get the last character of each rotation
    index = rotations.index(text)  # Find the index of the original text
    return transformed_text, index

def inverse_burrows_wheeler_transform(transformed_text, index):
    table = [''] * len(transformed_text)
    for i in range(len(transformed_text)):
        table = sorted(transformed_text[i] + table[i] for i in range(len(transformed_text)))

    original_text = table[index]
    return original_text.rstrip('$')

# Test the implementation
text = 'banana'
transformed_text, index = burrows_wheeler_transform(text)
print('Transformed text:', transformed_text)
print('Original text:', inverse_burrows_wheeler_transform(transformed_text, index))
