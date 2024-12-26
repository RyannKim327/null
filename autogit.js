def calculate_mean(numbers):
    if len(numbers) == 0:
        return 0  # handle edge case for empty list
    else:
        mean = sum(numbers) / len(numbers)
        return mean

# Example list of numbers
numbers = [1, 2, 3, 4, 5]

# Calculate the mean
mean = calculate_mean(numbers)
print("Mean:", mean)
