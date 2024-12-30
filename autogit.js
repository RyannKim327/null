def calculate_mean(numbers):
    total = sum(numbers)
    mean = total / len(numbers)
    return mean

numbers = [1, 2, 3, 4, 5]
print(calculate_mean(numbers))
