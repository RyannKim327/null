def burrows_wheeler_transform(text):
    table = [text[i:] + text[:i] for i in range(len(text))]
    table.sort()
    transformed_text = ''.join([row[-1] for row in table])
    return transformed_text

def inverse_burrows_wheeler_transform(text):
    table = [''] * len(text)
    for i in range(len(text)):
        table = sorted([text[j] + table[j] for j in range(len(text))])
    transformed_text = [row for row in table if row.endswith('$')][0]
    return transformed_text.rstrip('$')

# Example
text = "banana"
transformed_text = burrows_wheeler_transform(text + '$')
original_text = inverse_burrows_wheeler_transform(transformed_text)
print("Original Text:", original_text)
