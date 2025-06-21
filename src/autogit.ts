        3
       / \
      9   20
         /  \
        15   7
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
    // Base case: if the node is null, the depth is 0
    if (root === null) {
        return 0;
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The depth of the current node is 1 + the maximum of the two subtree depths
    return 1 + Math.max(leftDepth, rightDepth);
}
function maxDepthIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let depth = 0;
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
        depth++; // Increment the depth after processing each level
    }

    return depth;
}
// Create a sample binary tree
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root)); // Output: 3
console.log(maxDepthIterative(root)); // Output: 3
