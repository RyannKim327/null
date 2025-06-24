// Define the structure of a binary tree node
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

// Function to calculate the sum of all nodes recursively
function sumOfNodesRecursive(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Base case: empty tree contributes 0 to the sum
    }
    // Add the current node's value to the sum of its left and right subtrees
    return root.value + sumOfNodesRecursive(root.left) + sumOfNodesRecursive(root.right);
}
// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(sumOfNodesRecursive(root)); // Output: 15 (1 + 2 + 3 + 4 + 5)
// Function to calculate the sum of all nodes iteratively
function sumOfNodesIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0; // Empty tree contributes 0 to the sum
    }

    let sum = 0;
    const stack: TreeNode[] = [root]; // Initialize stack with the root node

    while (stack.length > 0) {
        const currentNode = stack.pop()!; // Get the next node to process
        sum += currentNode.value;

        // Push the left and right children onto the stack (if they exist)
        if (currentNode.left !== null) {
            stack.push(currentNode.left);
        }
        if (currentNode.right !== null) {
            stack.push(currentNode.right);
        }
    }

    return sum;
}
// Using the same binary tree as before
console.log(sumOfNodesIterative(root)); // Output: 15 (1 + 2 + 3 + 4 + 5)
