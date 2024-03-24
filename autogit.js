class Node {
    constructor(value, color, left, right, parent) {
        this.value = value;
        this.color = color;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Insertion
    insert(value) {
        let newNode = new Node(value, 'red', null, null, null);
        
        this.insertNode(newNode);

        this.fixViolations(newNode);
    }

    insertNode(newNode) {
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNodeHelper(this.root, newNode);
        }
    }

    insertNodeHelper(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
                newNode.parent = root;
            } else {
                this.insertNodeHelper(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
                newNode.parent = root;
            } else {
                this.insertNodeHelper(root.right, newNode);
            }
        }
    }

    fixViolations(node) {
        while (node !== this.root && node.color !== 'black' && node.parent.color === 'red') {
            let parent = node.parent;
            let grandparent = parent.parent;

            if (parent === grandparent.left) {
                let uncle = grandparent.right;

                if (uncle && uncle.color === 'red') {
                    grandparent.color = 'red';
                    parent.color = 'black';
                    uncle.color = 'black';
                    node = grandparent;
                } else {
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    
                    this.rotateRight(grandparent);
                    let temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    node = parent;
                }
            } else {
                let uncle = grandparent.left;

                if (uncle && uncle.color === 'red') {
                    grandparent.color = 'red';
                    parent.color = 'black';
                    uncle.color = 'black';
                    node = grandparent;
                } else {
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    this.rotateLeft(grandparent);
                    let temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    node = parent;
                }
            }
        }

        this.root.color = 'black';
    }

    rotateLeft(node) {
        let rightChild = node.right;
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

    rotateRight(node) {
        let leftChild = node.left;
        node.left = leftChild.right;

        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.left) {
            node.parent.left = leftChild;
        } else {
            node.parent.right = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }
}
