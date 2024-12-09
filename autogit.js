class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def sum_nodes(root):
    if root is None:
        return 0
    return root.data + sum_nodes(root.left) + sum_nodes(root.right)

# Example binary tree:
#        1
#       / \
#      2   3
#     / \
#    4   5
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

total_sum = sum_nodes(root)
print("Sum of all nodes in the binary tree:", total_sum)
