# Node definition for a binary tree
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# Function to find the height of a binary tree
def height(node):
    if node is None:
        return 0
    else:
        left_height = height(node.left)
        right_height = height(node.right)

        return 1 + max(left_height, right_height)

# Function to find the diameter of a binary tree
def diameter(node):
    if node is None:
        return 0

    # Calculate the height of the left and right subtrees
    left_height = height(node.left)
    right_height = height(node.right)

    # Calculate the diameter passing through the current node
    left_diameter = diameter(node.left)
    right_diameter = diameter(node.right)

    return max(left_height + right_height + 1, max(left_diameter, right_diameter))

# Example usage
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

print("Diameter of the binary tree is:", diameter(root))
