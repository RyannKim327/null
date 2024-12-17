def reverse_words(input_string):
    # Split the input string into individual words
    words = input_string.split()
    
    # Reverse the order of words in the list
    reversed_words = words[::-1]
    
    # Join the words back together to form a new string
    reversed_string = ' '.join(reversed_words)
    
    return reversed_string
