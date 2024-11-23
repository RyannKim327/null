def count_character_occurrences(string, char):
    count = 0
    for c in string:
        if c == char:
            count += 1
    return count

# Test the function
test_string = "hello, world!"
char_to_count = "o"
occurrences = count_character_occurrences(test_string, char_to_count)

print(f"The character '{char_to_count}' appears {occurrences} times in the string.")
