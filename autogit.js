def count_occurrences(character, string):
    count = 0
    for char in string:
        if char == character:
            count += 1
    return count

# Test the function
char_count = count_occurrences('a', 'banana')
print(char_count)  # Output will be 3
