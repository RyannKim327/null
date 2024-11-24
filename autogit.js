def burrows_wheeler_transform(input_string):
    input_string += "$"  # Add marker character to end of string
    rotations = [input_string[i:] + input_string[:i] for i in range(len(input_string))]
    sorted_rotations = sorted(rotations)
    transformed_string = "".join(rotation[-1] for rotation in sorted_rotations)
    index = sorted_rotations.index(input_string)
    return transformed_string, index

def inverse_burrows_wheeler_transform(transformed_string, index):
    table = sorted(transformed_string)
    first_column = [char for char in table]
    for _ in range(len(transformed_string) - 1):
        first_column = sorted(row_char + table[i] for i, row_char in enumerate(first_column))
    original_string = first_column[index][:-1]
    return original_string

# Example usage
input_string = "banana"
transformed_string, index = burrows_wheeler_transform(input_string)
print("Burrows-Wheeler Transformed String:", transformed_string)
print("Index of original string in transformed string:", index)
original_string = inverse_burrows_wheeler_transform(transformed_string, index)
print("Original String:", original_string)
