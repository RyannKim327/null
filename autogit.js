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

    insert(value) {
        let newNode = new Node(value, "red");
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        this.fixTree(newNode);
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    fixTree(node) {
        while (node !== this.root && node.parent.color === "red") {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right;
                
                if (uncle && uncle.color === "red") {
                    node.parent.color = "black";
                    uncle.color = "black";
                    node.parent.parent.color = "red";
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    
                    node.parent.color = "black";
                    node.parent.parent.color = "red";
                    this.rotateRight(node.parent.parent);
                }
            } else {
                let uncle = node.parent.parent.left;
                
                if (uncle && uncle.color === "red") {
                    node.parent.color = "black";
                    uncle.color = "black";
                    node.parent.parent.color = "red";
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    
                    node.parent.color = "black";
                    node.parent.parent.color = "red";
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        
        this.root.color = "black";
    }

    rotateLeft(node) {
        let temp = node.right;
        node.right = temp.left;
        
        if (temp.left !== null) {
            temp.left.parent = node;
        }
        
        temp.parent = node.parent;
        
        if (node.parent === null) {
            this.root = temp;
        } else if (node === node.parent.left) {
            node.parent.left = temp;
        } else {
            node.parent.right = temp;
        }
        
        temp.left = node;
        node.parent = temp;
    }

    rotateRight(node) {
        let temp = node.left;
        node.left = temp.right;
        
        if (temp.right !== null) {
            temp.right.parent = node;
        }
        
        temp.parent = node.parent;
        
        if (node.parent === null) {
            this.root = temp;
        } else if (node === node.parent.right) {
            node.parent.right = temp;
        } else {
            node.parent.left = temp;
        }
        
        temp.right = node;
        node.parent = temp;
    }
}

// Usage
let rbTree = new RedBlackTree();
rbTree.insert(10);
rbTree.insert(20);
rbTree.insert(30);
rbTree.insert(15);
