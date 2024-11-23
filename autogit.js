# Definition for a binary tree node
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def sum_of_nodes(root):
    if root is None:
        return 0

    return root.val + sum_of_nodes(root.left) + sum_of_nodes(root.right)

# Example usage
# Construct a sample binary tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.left = TreeNode(6)
root.right.right = TreeNode(7)

# Calculate the sum of all nodes
total_sum = sum_of_nodes(root)
print("Sum of all nodes in the binary tree:", total_sum)
