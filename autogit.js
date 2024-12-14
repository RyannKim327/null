// Node structure for the binary tree
class Node:
    constructor(value):
        this.value = value
        this.left = null
        this.right = null

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(node):
    if node is null:
        return 0

    if node.left is null and node.right is null:  // Leaf node
        return 1

    return countLeafNodes(node.left) + countLeafNodes(node.right)

// Example:
root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

leafNodeCount = countLeafNodes(root)
print("Number of leaf nodes:", leafNodeCount)
