# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def diameterOfBinaryTree(root):
    def depth(node):
        if not node:
            return 0
        left_depth = depth(node.left)
        right_depth = depth(node.right)
        diameter[0] = max(diameter[0], left_depth + right_depth)
        return 1 + max(left_depth, right_depth)

    diameter = [0]
    depth(root)
    return diameter[0]

# Example usage
# Construct a sample binary tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print(diameterOfBinaryTree(root))  # Output: 3
