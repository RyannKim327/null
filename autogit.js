function countLeafNodes(node):
    if node is NULL:
        return 0
    if node.left is NULL and node.right is NULL:
        return 1
    return countLeafNodes(node.left) + countLeafNodes(node.right)

leafNodeCount = countLeafNodes(root)
