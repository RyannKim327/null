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
    // Base case: if the node is null, return 0
    if (root === null) {
        return 0;
    }
    
    // Recursively sum the values of the left and right subtrees and add the current node's value
    const leftSum = sumOfNodes(root.left);
    const rightSum = sumOfNodes(root.right);
    
    return root.value + leftSum + rightSum;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const totalSum = sumOfNodes(root);
console.log(`Sum of all nodes: ${totalSum}`); // Outputs: Sum of all nodes: 15
function sumOfNodesIterative(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let totalSum = 0;
    const stack: TreeNode[] = [root]; // Initialize stack with the root node

    while (stack.length > 0) {
        const currentNode = stack.pop()!;
        totalSum += currentNode.value; // Accumulate the node value

        // Push child nodes onto the stack
        if (currentNode.right) stack.push(currentNode.right);
        if (currentNode.left) stack.push(currentNode.left);
    }

    return totalSum;
}

// Example usage:
const totalSumIterative = sumOfNodesIterative(root);
console.log(`Sum of all nodes (iterative): ${totalSumIterative}`); // Outputs: Sum of all nodes (iterative): 15
