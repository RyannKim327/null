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
    
    // Recursive case: return the value of the current node plus the sum of left and right subtrees
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(sumOfNodes(root)); // Output: 15
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
    if (!root) {
        return 0;
    }

    let sum = 0;
    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const node = stack.pop()!;
        sum += node.value;

        // Push right child first so left child is processed next (LIFO)
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }

    return sum;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(sumOfNodes(root)); // Output: 15
