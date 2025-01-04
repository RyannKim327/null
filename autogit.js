def count_occurrences(string, char):
    count = 0
    for c in string:
        if c == char:
            count += 1
    return count

string = "Hello, World!"
char = "o"
result = count_occurrences(string, char)
print(f"The character '{char}' occurs {result} times in the string.")
