# Function to count the occurrence of a character in a string
def count_occurrence(text, char):
    count = 0
    for c in text:
        if c == char:
            count += 1
    return count

# Test the function
text = "Hello, World!"
char = "l"
result = count_occurrence(text, char)
print(f"The character '{char}' occurs {result} times in the text.")
