class TreeNode:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(node, key):
    if node is None:
        return TreeNode(key)
    else:
        if key < node.val:
            node.left = insert(node.left, key)
        else:
            node.right = insert(node.right, key)
    return node

def search(node, key):
    if node is None or node.val == key:
        return node
    if node.val < key:
        return search(node.right, key)
    return search(node.left, key)

root = None
keys = [8, 3, 10, 1, 6, 14, 4, 7, 13]

for key in keys:
    root = insert(root, key)

# Search for a key in the BST
key_to_search = 6
result = search(root, key_to_search)

if result:
    print(f"Key {key_to_search} found in the tree.")
else:
    print(f"Key {key_to_search} not found in the tree.")
