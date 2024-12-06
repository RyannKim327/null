class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def diameter_of_binary_tree(root):
    def height(node):
        nonlocal diameter
        if not node:
            return 0
        left_height = height(node.left)
        right_height = height(node.right)

        # update the diameter if necessary
        diameter = max(diameter, left_height + right_height)

        return 1 + max(left_height, right_height)

    diameter = 0
    height(root)
    return diameter

# Example usage
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("The diameter of the binary tree is:", diameter_of_binary_tree(root))
