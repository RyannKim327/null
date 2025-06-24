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
    // Base case: if the tree is empty, its depth is 0
    if (root === null) {
        return 0;
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The maximum depth is 1 (for the current node) plus the greater of the two subtree depths
    return 1 + Math.max(leftDepth, rightDepth);
}
function maxDepthIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let depth = 0;
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length; // Number of nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()!; // Dequeue the front node
            if (currentNode.left !== null) {
                queue.push(currentNode.left); // Enqueue left child
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right); // Enqueue right child
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

// Find the maximum depth using the recursive approach
console.log("Recursive Max Depth:", maxDepth(root)); // Output: 3

// Find the maximum depth using the iterative approach
console.log("Iterative Max Depth:", maxDepthIterative(root)); // Output: 3
