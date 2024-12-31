class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def sum_tree_nodes(root):
    if root is None:
        return 0
    return root.val + sum_tree_nodes(root.left) + sum_tree_nodes(root.right)

# Example usage:
# Construct a sample binary tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.left = TreeNode(6)
root.right.right = TreeNode(7)

total_sum = sum_tree_nodes(root)
print(total_sum)  # Output: 28
