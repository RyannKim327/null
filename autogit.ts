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
        // If the tree is empty, the depth is 0
        return 0;
    }
    
    // Recursively find the depth of the left and right subtree
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    // The depth of the current node is 1 (for the current node) + max of the depths of the left and right subtrees
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

console.log(maxDepth(root)); // Output: 3
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
        return 0;
    }
    
    const queue: Array<TreeNode | null> = [root];
    let depth = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (node) {
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        depth++;
    }

    return depth;
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

console.log(maxDepth(root)); // Output: 3
