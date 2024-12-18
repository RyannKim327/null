def count_occurrences(string, character):
    count = 0
    for char in string:
        if char == character:
            count += 1
    return count

# Test the function
string = "hello world"
character = "l"
occurrences = count_occurrences(string, character)
print(f"The character '{character}' occurs {occurrences} times in the string.")
