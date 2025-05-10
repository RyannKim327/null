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
    } else {
        const leftDepth = maxDepth(root.left);
        const rightDepth = maxDepth(root.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}

// Example usage:
// Creating a sample binary tree
//        1
//       / \
//      2   3
//     /
//    4
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

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
    if (root === null) return 0;

    let queue: Array<TreeNode | null> = [root];
    let depth = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        depth++; // Increase depth as we are going one level deeper

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node !== null) {
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
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

console.log(maxDepth(root)); // Output: 3
