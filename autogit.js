class TreeNode:
    value
    left
    right

function findSumOfNodes(node):
    if node is null:
        return 0
    
    sum = node.value + findSumOfNodes(node.left) + findSumOfNodes(node.right)
    return sum

# Example usage
root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

totalSum = findSumOfNodes(root)
print(totalSum)
