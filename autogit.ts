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

function countLeafNodes(root: TreeNode | null): number {
    // Base case: if the tree is empty
    if (root === null) {
        return 0;
    }

    // If the current node is a leaf node
    if (root.left === null && root.right === null) {
        return 1;
    }

    // Recursively count leaf nodes in both subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage:
// Constructing a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
// The tree looks like this:
//       1
//      / \
//     2   3
//    / \
//   4   5

console.log(countLeafNodes(root)); // Output: 3 (nodes 4, 5, and 3 are leaf nodes)
