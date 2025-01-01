def burrows_wheeler_transform(text):
    text = text + "$"  # Add marker at the end of the text
    rotations = [text[i:] + text[:i] for i in range(len(text))]  # Generate cyclic rotations of the text
    sorted_rotations = sorted(rotations)  # Sort the cyclic rotations
    bwt = ''.join(rotation[-1] for rotation in sorted_rotations)  # Build the Burrows-Wheeler Transform
    return bwt

def inverse_burrows_wheeler_transform(bwt):
    table = sorted(bwt)
    table_size = len(table)
    table = [[table[i], i] for i in range(table_size)]
    table.sort(key=lambda x: x[0])
    pos = 0
    plain_text = ''
    for _ in range(table_size-1):
        plain_text = table[pos][0] + plain_text
        pos = table[pos][1]
    return plain_text.replace("$", "")

# Example usage
text = "hello"
bwt_text = burrows_wheeler_transform(text)
print("Burrows-Wheeler Transform of 'hello':", bwt_text)

original_text = inverse_burrows_wheeler_transform(bwt_text)
print("Original text after inverse transform:", original_text)
