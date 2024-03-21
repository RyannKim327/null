class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function diameterOfBinaryTree(root) {
    let result = { diameter: 0 };

    function height(node) {
        if (node == null) return 0;
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);
        
        result.diameter = Math.max(result.diameter, leftHeight + rightHeight);
        
        return 1 + Math.max(leftHeight, rightHeight);
    }

    height(root);

    return result.diameter;
}

// Example usage
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

console.log(diameterOfBinaryTree(root)); // Output should be 4
