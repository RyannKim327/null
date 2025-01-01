# Define a node in the binary tree
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Function to calculate the sum of all nodes in the binary tree
def sum_binary_tree(root):
    if root is None:
        return 0
    return root.value + sum_binary_tree(root.left) + sum_binary_tree(root.right)

# Example of a binary tree
#         1
#        / \
#       2   3
#      / \
#     4   5
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

# Calculate the sum of all nodes in the binary tree
total_sum = sum_binary_tree(root)
print("Sum of all nodes in the binary tree:", total_sum)
