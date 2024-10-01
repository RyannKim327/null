# Define a function to calculate the mean
def calculate_mean(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)

# Example list of numbers
numbers = [1, 2, 3, 4, 5]

# Calculate the mean
mean = calculate_mean(numbers)

# Print the mean
print("Mean:", mean)
