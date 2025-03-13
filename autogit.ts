// Define the tree node structure
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

// Recursive solution
function maxDepth(root: TreeNode | null): number {
    // Base case: if the tree is empty, depth is 0
    if (root === null) {
        return 0;
    }

    // Recursively find the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Return the maximum depth + 1 (to count the current node)
    return Math.max(leftDepth, rightDepth) + 1;
}

// Alternative solution using BFS (Breadth-First Search)
function maxDepthBFS(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    const queue: TreeNode[] = [root];
    let depth = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        depth++;
    }

    return depth;
}

// Example usage
const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

console.log(maxDepth(tree)); // Output: 3
console.log(maxDepthBFS(tree)); // Output: 3
