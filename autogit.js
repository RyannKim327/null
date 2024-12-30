def calculate_mean(numbers):
    total = sum(numbers)
    mean = total / len(numbers)
    return mean

# Example list of numbers
numbers = [1, 2, 3, 4, 5]

# Calculate the mean
mean = calculate_mean(numbers)

print("Mean:", mean)
