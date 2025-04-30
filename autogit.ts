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
    // Base case: if the tree is empty, return 0
    if (root === null) {
        return 0;
    }

    // Recursively find the depth of the left and right subtree
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The maximum depth is the greater of the two depths plus one for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage
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
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        // Number of nodes at the current depth
        const levelSize = queue.length;
        depth++;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()!; // Getting the current node
            
            // Add the left and right children to the queue
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }

    return depth;
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3
