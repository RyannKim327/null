// Definition of a binary tree node
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root: TreeNode | null): number {
    // Base case: if the tree is empty, its depth is 0
    if (root === null) {
        return 0;
    }

    // Recursively find the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Return the maximum depth of the two subtrees, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}
function maxDepthIterative(root: TreeNode | null): number {
    // If the tree is empty, its depth is 0
    if (root === null) {
        return 0;
    }

    let depth = 0; // Initialize the depth counter
    const queue: TreeNode[] = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()!; // Dequeue the front node
            if (currentNode.left !== null) {
                queue.push(currentNode.left); // Enqueue the left child
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right); // Enqueue the right child
            }
        }
        depth++; // Increment the depth after processing a level
    }

    return depth;
}
// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Recursive solution
console.log(maxDepth(root)); // Output: 3

// Iterative solution
console.log(maxDepthIterative(root)); // Output: 3
