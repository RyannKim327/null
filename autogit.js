class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def max_depth(node):
    if node is None:
        return 0
    else:
        left_depth = max_depth(node.left)
        right_depth = max_depth(node.right)
        
        return max(left_depth, right_depth) + 1

# Example binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("Maximum depth of the binary tree is:", max_depth(root))
