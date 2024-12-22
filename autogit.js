def burrows_wheeler_transform(text):
    text += '$'  # Add a unique delimiter
    rotations = [text[i:] + text[:i] for i in range(len(text))]  # Create all rotations of the text
    rotations.sort()  # Sort the rotations lexicographically
    bwt = ''.join(rotation[-1] for rotation in rotations)  # Construct the Burrows-Wheeler Transform
    return bwt, rotations.index(text)  # Return the transformed text and the index of the original text in the sorted rotations

def inverse_burrows_wheeler_transform(bwt, idx):
    table = sorted(bwt)  # Create the initial table by sorting the BWT
    n = len(bwt)
    for _ in range(n - 1):
        table = sorted([bwt[i] + table[i] for i in range(n)])  # Update the table iteratively

    text = table[idx]  # Retrieve the original text from the table
    return text.rstrip('$')  # Remove the added delimiter

# Example
text = "banana"
bwt, idx = burrows_wheeler_transform(text)
print("Burrows-Wheeler Transform:", bwt)
print("Original text:", inverse_burrows_wheeler_transform(bwt, idx))
