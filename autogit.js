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
        if (!node) return 0;

        // Calculate the depth of left and right subtrees
        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);

        // Update the diameter if the sum of left and right depths is greater
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return the depth of the current node
        return 1 + Math.max(leftDepth, rightDepth);
    }

    dfs(root);

    return diameter;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
