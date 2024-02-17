class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function diameterOfBinaryTree(root) {
    let diameter = 0;
    
    function depth(node) {
        if (node === null) {
            return 0;
        }
        
        let leftDepth = depth(node.left);
        let rightDepth = depth(node.right);
        
        diameter = Math.max(diameter, leftDepth + rightDepth);
        
        return 1 + Math.max(leftDepth, rightDepth);
    }
    
    depth(root);
    
    return diameter;
}

// Example binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
