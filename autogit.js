class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    
    countLeafNodes() {
        return this._countLeafNodesRecursive(this.root);
    }
    
    _countLeafNodesRecursive(node) {
        if (node === null) {
            return 0;
        }
        
        if (node.left === null && node.right === null) {
            return 1; // Found a leaf node
        }
        
        return this._countLeafNodesRecursive(node.left) + this._countLeafNodesRecursive(node.right);
    }
}

// Usage
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

console.log(tree.countLeafNodes()); // Output: 4
