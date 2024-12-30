def burrows_wheeler_transform(text):
    text += '$'  # Add a unique delimiter symbol
    rotations = [text[i:] + text[:i] for i in range(len(text))]  # Generate cyclic rotations of the text
    sorted_rotations = sorted(rotations)  # Sort the cyclic rotations lexicographically
    bwt = ''.join(rotation[-1] for rotation in sorted_rotations)  # Take the last character of each sorted rotation
    return bwt

def inverse_burrows_wheeler_transform(bwt):
    table = sorted(bwt)
    first_column = [char for char in bwt]
    next_column = [None] * len(bwt)

    for i in range(len(bwt)):
        # Create the next column based on the previous column
        next_column = sorted([char + next_char for char, next_char in zip(first_column, next_column)])

    last_column = next_column[table.index('$')]  # Find the original string
    return last_column[:-1]  # Remove the delimiter


# Example usage
text = "banana"
bwt_text = burrows_wheeler_transform(text)
print("Burrows-Wheeler Transform:", bwt_text)

original_text = inverse_burrows_wheeler_transform(bwt_text)
print("Original Text:", original_text)
