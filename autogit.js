class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function treeDiameter(root) {
    let diameter = 0;

    function depth(node) {
        if (!node) {
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

// Example usage
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(treeDiameter(root)); // Output: 3
