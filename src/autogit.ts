// Define the structure of a binary tree node
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

// Function to count the number of leaf nodes recursively
function countLeafNodes(root: TreeNode | null): number {
    // Base case: if the node is null, return 0
    if (root === null) {
        return 0;
    }

    // If the node is a leaf (no left or right child), return 1
    if (root.left === null && root.right === null) {
        return 1;
    }

    // Recursively count leaf nodes in the left and right subtrees
    const leftCount = countLeafNodes(root.left);
    const rightCount = countLeafNodes(root.right);

    // Return the total count
    return leftCount + rightCount;
}
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

// Count the leaf nodes
console.log(countLeafNodes(root)); // Output: 3 (nodes 4, 5, and 6 are leaves)
function countLeafNodesIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let count = 0;
    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const current = stack.pop()!;

        // Check if the current node is a leaf
        if (current.left === null && current.right === null) {
            count++;
        }

        // Push the left and right children onto the stack
        if (current.left !== null) {
            stack.push(current.left);
        }
        if (current.right !== null) {
            stack.push(current.right);
        }
    }

    return count;
}
// Using the same binary tree as above
console.log(countLeafNodesIterative(root)); // Output: 3
