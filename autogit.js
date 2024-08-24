def calculate_mean(numbers):
    sum_numbers = sum(numbers)
    mean = sum_numbers / len(numbers)
    return mean

# Example list of numbers
numbers = [1, 2, 3, 4, 5]
mean_value = calculate_mean(numbers)
print("Mean:", mean_value)
