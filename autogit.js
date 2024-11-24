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

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val)
        inorder_traversal(root.right)

# Usage
root = Node(5)
insert(root, 3)
insert(root, 8)
insert(root, 2)
insert(root, 4)
insert(root, 6)
insert(root, 9)

inorder_traversal(root)
