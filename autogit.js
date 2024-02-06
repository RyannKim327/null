class TreeNode {
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

    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return false;
        }

        if (node.value === value) {
            return true;
        }

        if (value < node.value) {
            return this.searchNode(node.left, value);
        }

        return this.searchNode(node.right, value);
    }

    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.value) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.value) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            const minNode = this.findMinNode(node.right);
            node.value = minNode.value;
            node.right = this.removeNode(node.right, minNode.value);
            return node;
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    display() {
        if (this.root === null) {
            console.log("Binary tree is empty.");
        } else {
            console.log("Binary tree:");
            this.displayNode(this.root);
        }
    }

    displayNode(node) {
        if (node !== null) {
            this.displayNode(node.left);
            console.log(node.value);
            this.displayNode(node.right);
        }
    }
}
const binaryTree = new BinaryTree();

binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(8);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(9);

binaryTree.display(); // Outputs the binary tree in sorted order: 2, 3, 4, 5, 7, 8, 9
console.log(binaryTree.search(7)); // Outputs: true

binaryTree.remove(5);
binaryTree.display(); // Outputs the binary tree in sorted order: 2, 3, 4, 7, 8, 9
console.log(binaryTree.search(5)); // Outputs: false
