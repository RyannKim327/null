// Definition of a binary tree node
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Base case: empty tree has depth 0
    }

    const leftDepth = maxDepth(root.left);  // Recursively find depth of left subtree
    const rightDepth = maxDepth(root.right); // Recursively find depth of right subtree

    return Math.max(leftDepth, rightDepth) + 1; // Add 1 for the current node
}
function maxDepthIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Empty tree has depth 0
    }

    const queue: TreeNode[] = [root]; // Initialize queue with the root node
    let depth = 0;

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()!; // Remove the front node from the queue
            if (currentNode.left !== null) {
                queue.push(currentNode.left); // Add left child to the queue
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right); // Add right child to the queue
            }
        }
        depth++; // Increment depth after processing a level
    }

    return depth;
}
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate maximum depth using the recursive approach
console.log(maxDepth(root)); // Output: 3

// Calculate maximum depth using the iterative approach
console.log(maxDepthIterative(root)); // Output: 3
