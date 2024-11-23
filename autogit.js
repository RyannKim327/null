function countLeafNodes(node):
    if node is null:
        return 0
    
    if node.left is null and node.right is null:
        return 1
    
    return countLeafNodes(node.left) + countLeafNodes(node.right)
