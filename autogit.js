class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def count_leaf_nodes(node):
    if node is None:
        return 0
    if node.left is None and node.right is None:
        return 1
    return count_leaf_nodes(node.left) + count_leaf_nodes(node.right)
