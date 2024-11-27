def calculate_mean(numbers):
    total_sum = sum(numbers)
    total_count = len(numbers)
    mean = total_sum / total_count
    return mean

# Example list of numbers
numbers = [1, 2, 3, 4, 5]

# Calculate the mean
mean = calculate_mean(numbers)

print("Mean of the list is:", mean)
