class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color;
    }
}
class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Implement the necessary tree operations here
}
// Left Rotation
leftRotate(node) {
    const rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left !== null) {
        rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === null) {
        this.root = rightChild;
    } else if (node === node.parent.left) {
        node.parent.left = rightChild;
    } else {
        node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
}

// Right Rotation
rightRotate(node) {
    const leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== null) {
        leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null) {
        this.root = leftChild;
    } else if (node === node.parent.right) {
        node.parent.right = leftChild;
    } else {
        node.parent.left = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
}

// Color flip
flipColors(node) {
    node.color = !node.color;
    node.left.color = !node.left.color;
    node.right.color = !node.right.color;
}
insert(value) {
    const newNode = new Node(value, true); // Red color for new nodes

    // Perform regular BST insert
    if (this.root === null) {
        this.root = newNode;
    } else {
        this.insertNode(this.root, newNode);
    }

    // Fix any violations that may have occurred during insert
    this.fixInsertViolation(newNode);
}

insertNode(node, newNode) {
    if (newNode.value < node.value) {
        if (node.left === null) {
            node.left = newNode;
            newNode.parent = node;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else if (newNode.value > node.value) {
        if (node.right === null) {
            node.right = newNode;
            newNode.parent = node;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
}

fixInsertViolation(node) {
    while (node !== this.root && node.color && node.parent.color) {
        if (node.parent === node.parent.parent.left) {
            const uncle = node.parent.parent.right;

            if (uncle !== null && uncle.color) {
                node.parent.color = false;
                uncle.color = false;
                node.parent.parent.color = true;
                node = node.parent.parent;
            } else {
                if (node === node.parent.right) {
                    node = node.parent;
                    this.leftRotate(node);
                }

                node.parent.color = false;
                node.parent.parent.color = true;
                this.rightRotate(node.parent.parent);
            }
        } else {
            const uncle = node.parent.parent.left;

            if (uncle !== null && uncle.color) {
                node.parent.color = false;
                uncle.color = false;
                node.parent.parent.color = true;
                node = node.parent.parent;
            } else {
                if (node === node.parent.left) {
                    node = node.parent;
                    this.rightRotate(node);
                }

                node.parent.color = false;
                node.parent.parent.color = true;
                this.leftRotate(node.parent.parent);
            }
        }
    }

    this.root.color = false;
}
