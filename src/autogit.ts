// Definition of a binary tree node
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countLeafNodes(root: TreeNode | null): number {
    // Base case: If the node is null, return 0
    if (root === null) {
        return 0;
    }

    // Check if the current node is a leaf node
    if (root.left === null && root.right === null) {
        return 1;
    }

    // Recursively count leaf nodes in the left and right subtrees
    const leftLeaves = countLeafNodes(root.left);
    const rightLeaves = countLeafNodes(root.right);

    return leftLeaves + rightLeaves;
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log("Number of leaf nodes:", countLeafNodes(root)); // Output: 3
function countLeafNodesIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let leafCount = 0;
    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const currentNode = stack.pop()!; // Pop the top node from the stack

        // Check if the current node is a leaf node
        if (currentNode.left === null && currentNode.right === null) {
            leafCount++;
        }

        // Push the children onto the stack (right first, then left)
        if (currentNode.right !== null) {
            stack.push(currentNode.right);
        }
        if (currentNode.left !== null) {
            stack.push(currentNode.left);
        }
    }

    return leafCount;
}

// Example usage
console.log("Number of leaf nodes (iterative):", countLeafNodesIterative(root)); // Output: 3
