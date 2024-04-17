class Node {
    constructor(value, color) {
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Helper functions for rotating nodes
    leftRotate(node) {
        let child = node.right;
        node.right = child.left;

        if (child.left !== null)
            child.left.parent = node;

        child.parent = node.parent;

        if (node.parent === null)
            this.root = child;
        else if (node === node.parent.left)
            node.parent.left = child;
        else
            node.parent.right = child;

        child.left = node;
        node.parent = child;
    }

    rightRotate(node) {
        let child = node.left;
        node.left = child.right;

        if (child.right !== null)
            child.right.parent = node;

        child.parent = node.parent;

        if (node.parent === null)
            this.root = child;
        else if (node === node.parent.right)
            node.parent.right = child;
        else
            node.parent.left = child;

        child.right = node;
        node.parent = child;
    }

    // Insertion method
    insert(value) {
        let newNode = new Node(value, "red");
        
        if (this.root === null) {
            this.root = newNode;
            this.root.color = "black";
            return;
        }

        let current = this.root;
        let parent = null;

        while (current !== null) {
            parent = current;

            if (value < current.value)
                current = current.left;
            else
                current = current.right;
        }

        newNode.parent = parent;

        if (value < parent.value)
            parent.left = newNode;
        else
            parent.right = newNode;

        this.fixInsert(newNode);
    }

    // Fix the red-black tree rules after node insertion
    fixInsert(node) {
        while (node !== this.root && node.color !== "black" && node.parent.color === "red") {
            let parent = node.parent;
            let grandparent = node.parent.parent;

            if (parent === grandparent.left) {
                let uncle = grandparent.right;

                if (uncle !== null && uncle.color === "red") {
                    grandparent.color = "red";
                    parent.color = "black";
                    uncle.color = "black";
                    node = grandparent;
                } else {
                    if (node === parent.right) {
                        this.leftRotate(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    this.rightRotate(grandparent);
                    let tempColor = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tempColor;
                    node = parent;
                }
            } else {
                let uncle = grandparent.left;

                if (uncle !== null && uncle.color === "red") {
                    grandparent.color = "red";
                    parent.color = "black";
                    uncle.color = "black";
                    node = grandparent;
                } else {
                    if (node === parent.left) {
                        this.rightRotate(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    this.leftRotate(grandparent);
                    let tempColor = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = tempColor;
                    node = parent;
                }
            }
        }

        this.root.color = "black";
    }
}

// Example usage
const rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(5);
