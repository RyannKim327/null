def count_occurrences(string, char):
    count = 0
    for c in string:
        if c == char:
            count += 1
    return count

# Test
string = "hello, world!"
char = "o"
print(count_occurrences(string, char))  # Output: 2
