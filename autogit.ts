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
        return 0;
    }
    
    // Recursively compute the depth of the left and right children
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    // The maximum depth at the current node is 1 + the maximum of the depths of its children
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3
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
        return 0;
    }

    let depth = 0;
    const queue: TreeNode[] = [root]; // Start with the root node

    while (queue.length > 0) {
        let levelSize = queue.length; // Number of nodes at the current level
        depth++; // Increase depth for each level

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Dequeue the front node

            if (node?.left) {
                queue.push(node.left); // Add left child to the queue
            }
            if (node?.right) {
                queue.push(node.right); // Add right child to the queue
            }
        }
    }

    return depth;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3
