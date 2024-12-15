class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def sum_of_nodes(root):
    if root is None:
        return 0
    
    return root.value + sum_of_nodes(root.left) + sum_of_nodes(root.right)

# Example tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.left = TreeNode(6)
root.right.right = TreeNode(7)

# Calculate the sum of all nodes in the tree
total_sum = sum_of_nodes(root)
print(total_sum)
