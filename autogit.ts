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
        return 0; // Base case: the depth of an empty tree is 0
    }

    // Get the depth of the left and right subtrees and add 1 for the current node
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}
function maxDepthIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Base case: the depth of an empty tree is 0
    }

    let depth = 0;
    const queue: Array<TreeNode | null> = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        
        // Process all nodes at the current depth level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Dequeue the front node

            // Enqueue child nodes
            if (node?.left) queue.push(node.left);
            if (node?.right) queue.push(node.right);
        }

        depth++; // Increase depth after processing all nodes at the current level
    }

    return depth;
}
