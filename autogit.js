function sumOfNodes(node):
    if node is null:
        return 0
    return node.value + sumOfNodes(node.left) + sumOfNodes(node.right)
