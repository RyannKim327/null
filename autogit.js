# Define the Node class for the binary tree
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

# Function to count the number of leaf nodes in a binary tree
def count_leaf_nodes(node):
    if node is None:
        return 0
    if node.left is None and node.right is None:
        return 1
    return count_leaf_nodes(node.left) + count_leaf_nodes(node.right)

# Define the binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

# Call the function to count the number of leaf nodes
num_leaf_nodes = count_leaf_nodes(root)

print("Number of leaf nodes in the binary tree:", num_leaf_nodes)
