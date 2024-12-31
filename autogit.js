def reverse_words_in_string(input_str):
    words = input_str.split()  # Split the string into words
    reversed_words = words[::-1]  # Reverse the order of words
    reversed_str = ' '.join(reversed_words)  # Join the reversed words
    return reversed_str

# Test the function
input_str = "Hello World! This is a test."
reversed_str = reverse_words_in_string(input_str)
print(reversed_str)  # Output: "test. a is This World! Hello"
