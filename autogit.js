def calculate_mean(numbers):
    sum_numbers = sum(numbers)
    count_numbers = len(numbers)
    
    mean = sum_numbers / count_numbers
    
    return mean

# Example list of numbers
numbers = [1, 2, 3, 4, 5]
mean = calculate_mean(numbers)
print("Mean of the list is:", mean)
