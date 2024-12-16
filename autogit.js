class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def height(node):
    if node is None:
        return 0
    left_height = height(node.left)
    right_height = height(node.right)
    return 1 + max(left_height, right_height)

def diameter(node):
    if node is None:
        return 0

    left_height = height(node.left)
    right_height = height(node.right)

    left_diameter = diameter(node.left)
    right_diameter = diameter(node.right)

    return max(left_height + right_height + 1, max(left_diameter, right_diameter))

# Example usage
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("Diameter of the binary tree is:", diameter(root))
