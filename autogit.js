def burrows_wheeler_transform(text):
    # Create a list of all rotations of the text
    rotations = [text[i:] + text[:i] for i in range(len(text))]
    
    # Sort the rotations lexicographically
    rotations.sort()
    
    # Extract the last characters of each rotation to form the Burrows-Wheeler transformed text
    bwt_transform = ''.join(rotation[-1] for rotation in rotations)
    
    return bwt_transform

# Test the implementation
text = 'banana'
bwt_result = burrows_wheeler_transform(text)
print("Burrows-Wheeler Transform of '{}' is '{}'".format(text, bwt_result))
