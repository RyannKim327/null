def calculate_mean(numbers):
    if len(numbers) == 0:
        return 0  # Handle division by zero error
    return sum(numbers) / len(numbers)
