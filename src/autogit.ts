// Definition of a binary tree node
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Base case: empty tree has depth 0
    }

    // Recursively find the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Return the maximum depth of the two subtrees, plus 1 for the current node
    return 1 + Math.max(leftDepth, rightDepth);
}
const tree = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(4), 
        new TreeNode(5)
    ), 
    new TreeNode(3)
);

console.log(maxDepth(tree)); // Output: 3
function maxDepthIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Empty tree has depth 0
    }

    const queue: TreeNode[] = [root];
    let depth = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()!; // Remove the front node from the queue

            // Add the left and right children to the queue if they exist
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        depth++; // Increment depth after processing a level
    }

    return depth;
}
const tree = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(4), 
        new TreeNode(5)
    ), 
    new TreeNode(3)
);

console.log(maxDepthIterative(tree)); // Output: 3
