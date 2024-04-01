class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findDiameter(root) {
    let diameter = 0;

    function height(node) {
        if (node === null) {
            return 0;
        }

        let leftHeight = height(node.left);
        let rightHeight = height(node.right);

        diameter = Math.max(diameter, leftHeight + rightHeight);
        return 1 + Math.max(leftHeight, rightHeight);
    }

    height(root);

    return diameter;
}

// Example binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(findDiameter(root)); // Output should be 4
