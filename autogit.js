def majority_element(nums):
  """
  Finds the majority element in an array.

  A majority element is defined as an element that appears more than
  half the size of the array.

  Parameters:
    nums: The array to search.

  Returns:
    The majority element, or -1 if no majority element exists.
  """

  # Initialize a dictionary to store the count of each element.
  count_dict = {}

  # Iterate over the array and update the count of each element.
  for num in nums:
    if num not in count_dict:
      count_dict[num] = 0
    count_dict[num] += 1

  # Find the element with the maximum count.
  max_count = 0
  majority_element = -1
  for num, count in count_dict.items():
    if count > max_count:
      max_count = count
      majority_element = num

  # Check if the majority element appears more than half the size of the array.
  if max_count > len(nums) / 2:
    return majority_element

  # Otherwise, return -1.
  return -1
