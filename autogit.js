def count_occurrences(s, char):
    count = 0
    for c in s:
        if c == char:
            count += 1
    return count

# Test the function
string = "hello, world!"
character = "o"
result = count_occurrences(string, character)
print(f"The character '{character}' occurs {result} times in the string.")
