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

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Base case: if the node is null, depth is 0
    }
    // Calculate the depth of each subtree
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    // Return the maximum of the two depths plus one for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}
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

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Base case: if the node is null, depth is 0
    }
    const queue: Array<{ node: TreeNode, depth: number }> = [{ node: root, depth: 1 }];
    let maxDepth = 0;

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the first node in the queue

        // Update maxDepth if we find a greater depth
        maxDepth = Math.max(maxDepth, depth);

        // Add child nodes to the queue
        if (node.left) {
            queue.push({ node: node.left, depth: depth + 1 });
        }
        if (node.right) {
            queue.push({ node: node.right, depth: depth + 1 });
        }
    }

    return maxDepth;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3
