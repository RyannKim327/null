# Definition for a binary tree node
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Function to find the sum of all nodes in a binary tree
def sum_of_nodes(node):
    if node is None:
        return 0

    return node.value + sum_of_nodes(node.left) + sum_of_nodes(node.right)

# Example usage
# Construct a binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

# Get the sum of all nodes in the binary tree
result = sum_of_nodes(root)
print("Sum of all nodes in the binary tree is:", result)
