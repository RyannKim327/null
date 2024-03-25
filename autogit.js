class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function getHeight(node) {
    if (node === null) {
        return 0;
    }

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
}

function getDiameter(node) {
    if (node === null) {
        return 0;
    }

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    const leftDiameter = getDiameter(node.left);
    const rightDiameter = getDiameter(node.right);

    return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(getDiameter(root)); // Output: 4
