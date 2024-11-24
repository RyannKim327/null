def calculate_mean(numbers):
    sum = 0
    for num in numbers:
        sum += num
    mean = sum / len(numbers)
    return mean

# Example usage
numbers = [1, 2, 3, 4, 5]
mean = calculate_mean(numbers)
print("Mean:", mean)
