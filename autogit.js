def bwt(input_string):
    rotations = [input_string[i:] + input_string[:i] for i in range(len(input_string))]
    sorted_rotations = sorted(rotations)
    bwt_result = ''.join(rotation[-1] for rotation in sorted_rotations)
    return bwt_result

def ibwt(input_string):
    table = [''] * len(input_string)
    for i in range(len(input_string)):
        table = sorted([input_string[i] + table[i] for i in range(len(input_string))])
    return next(row for row in table if row.endswith('$'))

# Example usage
input_string = "banana"
encoded = bwt(input_string)
decoded = ibwt(encoded)

print("Original String:", input_string)
print("Encoded String:", encoded)
print("Decoded String:", decoded)
