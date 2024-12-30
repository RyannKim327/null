def count_char_occurrences(input_string, char):
    count = 0
    for c in input_string:
        if c == char:
            count += 1
    return count

# Test the function
input_string = "hello, world!"
char = "o"
print(f"The character '{char}' occurs {count_char_occurrences(input_string, char)} times in the string.")
