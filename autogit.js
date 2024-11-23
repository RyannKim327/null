def count_char_occurrence(input_string, char):
    count = 0
    for c in input_string:
        if c == char:
            count += 1
    return count

# Example usage
input_string = "hello world"
char = "o"
occurrence = count_char_occurrence(input_string, char)
print(f"The character '{char}' occurs {occurrence} times in the string '{input_string}'")
