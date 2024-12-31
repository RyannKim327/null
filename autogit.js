function sumOfNodes(root):
    if root is null:
        return 0
        
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right)
