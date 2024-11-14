def calculate_mean(numbers):
    if len(numbers) == 0:
        return None

    total_sum = sum(numbers)
    count = len(numbers)
    mean = total_sum / count

    return mean

# Test the function
numbers = [1, 2, 3, 4, 5]
mean = calculate_mean(numbers)
print("Mean:", mean)
