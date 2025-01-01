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

# Example usage:
if __name__ == "__main__":
    root = None
    keys = [15, 10, 20, 8, 12, 16, 25]
    for key in keys:
        root = insert(root, key)

    inorder_traversal(root)
