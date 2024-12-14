class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    if root is None:
        return Node(key)
    else:
        if root.val < key:
            root.right = insert(root.right, key)
        else:
            root.left = insert(root.left, key)
    return root

def inorder_traversal(node):
    if node:
        inorder_traversal(node.left)
        print(node.val)
        inorder_traversal(node.right)

# Usage:
root = None
root = insert(root, 5)
root = insert(root, 3)
root = insert(root, 7)
root = insert(root, 1)
root = insert(root, 4)

inorder_traversal(root)
