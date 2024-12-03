class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def sum_of_nodes(root):
    if root is None:
        return 0
    
    return root.value + sum_of_nodes(root.left) + sum_of_nodes(root.right)
