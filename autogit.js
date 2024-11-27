def count_char_occurrence(input_string, char_to_count):
    count = 0
    for char in input_string:
        if char == char_to_count:
            count += 1
    return count

# Test the function
input_string = "Hello, World!"
char_to_count = "o"
occurrence_count = count_char_occurrence(input_string, char_to_count)
print(f"The character '{char_to_count}' occurs {occurrence_count} times in the string.")
