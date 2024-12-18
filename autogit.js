def calculate_mean(numbers):
    total = sum(numbers)
    mean = total / len(numbers)
    return mean

numbers = [1, 2, 3, 4, 5]
result = calculate_mean(numbers)
print("The mean of the numbers is:", result)
