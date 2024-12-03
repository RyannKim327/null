class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def sum_of_nodes(node):
    if node is None:
        return 0
        
    return node.value + sum_of_nodes(node.left) + sum_of_nodes(node.right)

# Example usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.left = TreeNode(6)
root.right.right = TreeNode(7)

print(sum_of_nodes(root))  # Output: 28
