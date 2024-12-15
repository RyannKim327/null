def count_char_occurrence(string, char):
    count = 0
    for c in string:
        if c == char:
            count += 1
    return count

# Test the function
string = "hello, world"
char = "l"
occurrence_count = count_char_occurrence(string, char)
print(f"The character '{char}' occurs {occurrence_count} times in the string.")
string = "hello, world"
char = "l"
occurrence_count = string.count(char)
print(f"The character '{char}' occurs {occurrence_count} times in the string.")
