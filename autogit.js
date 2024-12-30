class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def maxDepth(node):
    if node is None:
        return 0
    else:
        left_depth = maxDepth(node.left)
        right_depth = maxDepth(node.right)

        return max(left_depth, right_depth) + 1

# Example usage
# Create a simple binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("Maximum depth of the binary tree is:", maxDepth(root))
