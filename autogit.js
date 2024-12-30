class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert_node(root, key):
    if root is None:
        return Node(key)
    else:
        if root.val < key:
            root.right = insert_node(root.right, key)
        else:
            root.left = insert_node(root.left, key)
    return root

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val)
        inorder_traversal(root.right)

# Example usage:
root = None
root = insert_node(root, 50)
insert_node(root, 30)
insert_node(root, 20)
insert_node(root, 40)
insert_node(root, 70)
insert_node(root, 60)
insert_node(root, 80)

inorder_traversal(root)
