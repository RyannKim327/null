// Definition for a binary tree node.
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
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

// Example Usage:
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
        return 0;
    }

    const queue: TreeNode[] = [root];
    let depth = 0;

    while (queue.length > 0) {
        let levelSize = queue.length;
        depth++;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()!;
            
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

// Example Usage:
const tree = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

console.log(maxDepthIterative(tree)); // Output: 3
// TreeNode definition remains the same

// Recursive DFS
function maxDepthRecursive(root: TreeNode | null): number {
    if (root === null) return 0;
    const left = maxDepthRecursive(root.left);
    const right = maxDepthRecursive(root.right);
    return Math.max(left, right) + 1;
}

// Iterative BFS
function maxDepthIterative(root: TreeNode | null): number {
    if (root === null) return 0;
    const queue: TreeNode[] = [root];
    let depth = 0;

    while (queue.length > 0) {
        let size = queue.length;
        depth++;
        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return depth;
}

// Example Tree
const tree = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

// Testing Both Methods
console.log("Recursive Max Depth:", maxDepthRecursive(tree)); // Output: 3
console.log("Iterative Max Depth:", maxDepthIterative(tree)); // Output: 3
