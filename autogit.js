class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def count_leaf_nodes(node):
    if node is None:
        return 0
    if node.left is None and node.right is None:
        return 1
    else:
        return count_leaf_nodes(node.left) + count_leaf_nodes(node.right)

# Example binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

print("Number of leaf nodes:", count_leaf_nodes(root))
