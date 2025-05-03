class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0;

    function height(node: TreeNode | null): number {
        if (!node) return 0;
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        
        // Update the diameter at this node
        const localDiameter = leftHeight + rightHeight;
        if (localDiameter > maxDiameter) {
            maxDiameter = localDiameter;
        }
        
        // Height of the node is max of left/right subtree heights + 1
        return Math.max(leftHeight, rightHeight) + 1;
    }

    height(root);
    return maxDiameter;
}
