# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def diameterOfBinaryTree(root: TreeNode) -> int:
    def dfs(node):
        if not node:
            return 0, 0

        left_depth, left_diameter = dfs(node.left)
        right_depth, right_diameter = dfs(node.right)

        max_diameter = max(left_diameter, right_diameter, left_depth + right_depth)
        max_depth = 1 + max(left_depth, right_depth)

        return max_depth, max_diameter

    _, diameter = dfs(root)
    return diameter

# Example usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print(diameterOfBinaryTree(root))  # Output: 3
