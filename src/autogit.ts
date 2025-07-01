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
function sumOfNodes(root: TreeNode | null): number {
    // Base case: if the current node is null, return 0
    if (root === null) {
        return 0;
    }

    // Recursively calculate the sum of the left subtree, right subtree, and the current node's value
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}
// Helper function to create a binary tree for testing
function createBinaryTree(): TreeNode {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    return root;
}

// Create the binary tree and calculate the sum of all nodes
const root = createBinaryTree();
console.log("Sum of all nodes:", sumOfNodes(root)); // Output: 28
function sumOfNodesIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let sum = 0;
    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const currentNode = stack.pop()!;
        sum += currentNode.value;

        if (currentNode.right !== null) {
            stack.push(currentNode.right);
        }
        if (currentNode.left !== null) {
            stack.push(currentNode.left);
        }
    }

    return sum;
}
