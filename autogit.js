function sumOfNodes(node):
    if node is null:
        return 0
    return node.value + sumOfNodes(node.left) + sumOfNodes(node.right)

# Assuming your binary tree is initialized as "tree"
sum = sumOfNodes(tree.root)
