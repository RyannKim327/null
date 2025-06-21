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
    if (root === null) {
        return 0; // Base case: empty tree has depth 0
    }

    // Recursively find the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Return the greater depth of the two subtrees, plus one for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}
function maxDepthIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Empty tree has depth 0
    }

    const queue: TreeNode[] = [root];
    let depth = 0;

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()!; // Remove the first node from the queue
            if (currentNode.left !== null) {
                queue.push(currentNode.left); // Add left child to the queue
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right); // Add right child to the queue
            }
        }
        depth++; // Increment depth after processing all nodes at the current level
    }

    return depth;
}
// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Maximum Depth (Recursive):", maxDepth(root)); // Output: 3
console.log("Maximum Depth (Iterative):", maxDepthIterative(root)); // Output: 3
