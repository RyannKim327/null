def count_occurrence(string, char):
    count = 0
    for c in string:
        if c == char:
            count += 1
    return count

# Example usage
input_string = "hello world"
character_to_count = "o"
result = count_occurrence(input_string, character_to_count)
print(f"The character '{character_to_count}' occurs {result} times in the string.")
