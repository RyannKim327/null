class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def sum_all_nodes(root):
    if root is None:
        return 0
    
    return root.value + sum_all_nodes(root.left) + sum_all_nodes(root.right)

# Example binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

total_sum = sum_all_nodes(root)
print("Sum of all nodes in the binary tree is:", total_sum)
