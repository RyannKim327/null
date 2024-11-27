class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def sum_of_nodes(root):
    if root is None:
        return 0
    return root.val + sum_of_nodes(root.left) + sum_of_nodes(root.right)

# Example binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

print("Sum of all nodes in the binary tree:", sum_of_nodes(root))
