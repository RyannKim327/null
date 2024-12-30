class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def sum_of_nodes(root):
    if root is None:
        return 0

    return root.value + sum_of_nodes(root.left) + sum_of_nodes(root.right)

# Example binary tree
#        1
#       / \
#      2   3
#     / \
#    4   5
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

# Calculate sum of all nodes
total_sum = sum_of_nodes(root)
print("Sum of all nodes in the binary tree:", total_sum)
