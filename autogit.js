class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def diameter_of_binary_tree(root):
    if not root:
        return 0

    def height(node):
        if not node:
            return 0
        left_height = height(node.left)
        right_height = height(node.right)
        return 1 + max(left_height, right_height)

    def diameter_helper(node):
        if not node:
            return 0
        left_height = height(node.left)
        right_height = height(node.right)
        
        left_diameter = diameter_helper(node.left)
        right_diameter = diameter_helper(node.right)
        
        return max(left_height + right_height, max(left_diameter, right_diameter))
    
    return diameter_helper(root)

# Example usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print(diameter_of_binary_tree(root))  # Output: 4
