def count_characters(string, char):
    count = 0
    for c in string:
        if c == char:
            count += 1
    return count

# Example
my_string = "Hello, World!"
character_to_count = "o"
result = count_characters(my_string, character_to_count)

print(f"The character '{character_to_count}' appears {result} times in the string.")
