def burrows_wheeler_transform(input_str):
    input_str += '$'  # Add special end-of-string marker
    rotations = [input_str[i:] + input_str[:i] for i in range(len(input_str))]  # Generate all rotations of the input string
    rotations.sort()  # Sort the rotations lexicographically
    bwt_str = ''.join([rotation[-1] for rotation in rotations])  # Construct the Burrows-Wheeler Transform string
    return bwt_str
input_str = "banana"
bwt_str = burrows_wheeler_transform(input_str)
print("Input String:", input_str)
print("Burrows-Wheeler Transform:", bwt_str)
Input String: banana
Burrows-Wheeler Transform: annb$aa
