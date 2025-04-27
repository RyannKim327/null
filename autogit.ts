// Define your binary tree node
class TreeNode {
    value: number;
    left?: TreeNode;
    right?: TreeNode;

    constructor(value: number, left?: TreeNode, right?: TreeNode) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Function to calculate sum of all nodes
function sumOfNodes(root?: TreeNode): number {
    if (!root) {
        return 0; // empty subtree contributes nothing
    }
    return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}
const tree = new TreeNode(10,
    new TreeNode(5,
        new TreeNode(2),
        new TreeNode(7)
    ),
    new TreeNode(15,
        new TreeNode(12),
        new TreeNode(20)
    )
);

console.log(sumOfNodes(tree)); // Output: 10+5+2+7+15+12+20 = 71
