// Define the TreeNode interface
interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

// Function to sum all the nodes in the binary tree
function sumOfNodes(root: TreeNode | null): number {
    // Base case: if the node is null, return 0
    if (root === null) {
        return 0;
    }

    // Recursive case: return the value of the current node plus the sums of the left and right subtrees
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example usage:
const root: TreeNode = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 3,
        left: null,
        right: {
            value: 6,
            left: null,
            right: null
        }
    }
};

// Calculate the sum of all nodes
const totalSum = sumOfNodes(root);
console.log(`The sum of all nodes in the binary tree is: ${totalSum}`);
