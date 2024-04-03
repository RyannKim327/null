class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function diameterOfBinaryTree(root) {
    let diameter = 0;

    function dfs(node) {
        if (!node) {
            return 0;
        }

        let leftHeight = dfs(node.left);
        let rightHeight = dfs(node.right);

        // Update the diameter if necessary
        diameter = Math.max(diameter, leftHeight + rightHeight);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    dfs(root);

    return diameter;
}

// Usage
/*
    Construct a sample binary tree:
            1
           / \
          2   3
         / \
        4   5
    The diameter of this tree is 3 (the path 4-2-1-3)
*/
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
