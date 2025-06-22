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

    // Recursively calculate the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The maximum depth is 1 (current node) + the greater of the two subtree depths
    return 1 + Math.max(leftDepth, rightDepth);
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3
function maxDepthIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Empty tree has depth 0
    }

    const queue: [TreeNode, number][] = [[root, 1]]; // Queue stores [node, current depth]
    let maxDepth = 0;

    while (queue.length > 0) {
        const [node, depth] = queue.shift()!; // Dequeue the front node
        maxDepth = Math.max(maxDepth, depth); // Update max depth

        // Enqueue left and right children with incremented depth
        if (node.left !== null) {
            queue.push([node.left, depth + 1]);
        }
        if (node.right !== null) {
            queue.push([node.right, depth + 1]);
        }
    }

    return maxDepth;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepthIterative(root)); // Output: 3
function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}
