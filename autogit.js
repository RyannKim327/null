def burrows_wheeler_transform(input_string):
    rotations = [input_string[i:] + input_string[:i] for i in range(len(input_string))]
    sorted_rotations = sorted(rotations)
    bwt = ''.join(rotation[-1] for rotation in sorted_rotations)

    original_index = sorted_rotations.index(input_string)

    return bwt, original_index

# Example usage
input_string = "banana"
transformed_string, original_index = burrows_wheeler_transform(input_string)
print("Transformed string:", transformed_string)
print("Original index:", original_index)
