def burrows_wheeler_transform(text):
    # Generate all cyclic rotations of the input text
    rotations = [text[i:] + text[:i] for i in range(len(text))]

    # Sort the rotations lexicographically
    sorted_rotations = sorted(rotations)

    # Extract the last characters of each sorted rotation to get the transformed text
    transformed_text = ''.join(rotation[-1] for rotation in sorted_rotations)

    # Find the index of the original text in the sorted rotations
    original_index = sorted_rotations.index(text)

    return transformed_text, original_index

def inverse_burrows_wheeler_transform(transformed_text, original_index):
    table = sorted(transformed_text)

    first_col_ind = [i for i in range(len(transformed_text))]
    first_col_ind.sort(key=lambda x: transformed_text[x])

    current_ind = first_col_ind[original_index]
    result = []

    for i in range(len(transformed_text)):
        result.append(table[current_ind])
        current_ind = first_col_ind[current_ind]

    return ''.join(result)

# Test the Burrows-Wheeler Transform algorithm
text = "hello"
transformed_text, original_index = burrows_wheeler_transform(text)
print("Burrows-Wheeler Transform of 'hello':", transformed_text)
print("Original text index in the sorted rotations:", original_index)

# Test the Inverse Burrows-Wheeler Transform algorithm
original_text = inverse_burrows_wheeler_transform(transformed_text, original_index)
print("Inverse Burrows-Wheeler Transform of the transformed text:", original_text)
