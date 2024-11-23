def burrows_wheeler_transform(input_string):
    input_string += '$'  # Add a sentinel character to the end of the input string
    cyclic_permutations = [input_string[i:] + input_string[:i] for i in range(len(input_string))]
    sorted_permutations = sorted(cyclic_permutations)
    
    transformed_string = ''.join(perm[-1] for perm in sorted_permutations)
    original_position = sorted_permutations.index(input_string)
    
    return transformed_string, original_position

# Example usage
input_string = "banana"
transformed_string, original_position = burrows_wheeler_transform(input_string)
print("Burrows-Wheeler transformed string:", transformed_string)
print("Original position of input string:", original_position)
