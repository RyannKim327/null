// Step 1: Define the structure of a binary tree node
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

// Step 2: Implement the function to count leaf nodes
function countLeafNodes(root: TreeNode | null): number {
    // Base case: if the current node is null, it's not a leaf
    if (root === null) {
        return 0;
    }

    // Check if the current node is a leaf
    if (root.left === null && root.right === null) {
        return 1;
    }

    // Recursively count leaf nodes in the left and right subtrees
    const leftLeaves = countLeafNodes(root.left);
    const rightLeaves = countLeafNodes(root.right);

    // Total leaves is the sum of leaves in both subtrees
    return leftLeaves + rightLeaves;
}

// Example usage:
function main() {
    // Create nodes
    const root = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    const node6 = new TreeNode(6);

    // Build the tree
    /*
          1
         / \
        2   3
       / \   \
      4   5   6
    */
    root.left = node2;
    root.right = node3;
    node2.left = node4;
    node2.right = node5;
    node3.right = node6;

    // Count leaf nodes
    const numberOfLeaves = countLeafNodes(root);
    console.log(`Number of leaf nodes: ${numberOfLeaves}`); // Output should be 3
}

main();
function countLeafNodesIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let count = 0;
    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const current = stack.pop()!;
        
        if (current.left === null && current.right === null) {
            count++;
        }

        if (current.right !== null) {
            stack.push(current.right);
        }
        
        if (current.left !== null) {
            stack.push(current.left);
        }
    }

    return count;
}

// Example usage remains the same; just replace the function call:
const numberOfLeaves = countLeafNodesIterative(root);
console.log(`Number of leaf nodes (iterative): ${numberOfLeaves}`);
