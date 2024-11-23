def count_character_occurrences(input_string, target_character):
    count = 0
    for char in input_string:
        if char == target_character:
            count += 1
    return count

input_string = "Hello, World!"
target_character = "o"

occurrences = count_character_occurrences(input_string, target_character)
print(f"The character '{target_character}' occurs {occurrences} times in the string.")
