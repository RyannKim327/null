# Function to count occurrences of a character in a string
def count_occurrences(s, char):
    count = 0
    for c in s:
        if c == char:
            count += 1
    return count

# Test the function
s = "hello, world!"
char = 'o'
print(count_occurrences(s, char))  # Output: 2
