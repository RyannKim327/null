class Node {
    constructor(value, color = 'red') {
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

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            this.root.color = 'black';
            return this.root;
        }

        let current = this.root;
        while (current) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    newNode.parent = current;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (!current.right) {
                    current.right = newNode;
                    newNode.parent = current;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
        
        this.fixTreeAfterInsert(newNode);
    }

    fixTreeAfterInsert(node) {
        while (node !== this.root && node.parent.color === 'red') {
            let parent = node.parent;
            let grandparent = parent.parent;

            if (parent === grandparent.left) {
                const uncle = grandparent.right;

                if (uncle && uncle.color === 'red') {
                    parent.color = 'black';
                    uncle.color = 'black';
                    grandparent.color = 'red';
                    node = grandparent;
                } else {
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    parent.color = 'black';
                    grandparent.color = 'red';
                    this.rotateRight(grandparent);
                }
            } else {
                const uncle = grandparent.left;

                if (uncle && uncle.color === 'red') {
                    parent.color = 'black';
                    uncle.color = 'black';
                    grandparent.color = 'red';
                    node = grandparent;
                } else {
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    parent.color = 'black';
                    grandparent.color = 'red';
                    this.rotateLeft(grandparent);
                }
            }
        }

        this.root.color = 'black';
    }

    rotateLeft(node) {
        const temp = node.right;
        node.right = temp.left;

        if (temp.left) {
            temp.left.parent = node;
        }

        temp.parent = node.parent;

        if (!node.parent) {
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
        const temp = node.left;
        node.left = temp.right;

        if (temp.right) {
            temp.right.parent = node;
        }

        temp.parent = node.parent;

        if (!node.parent) {
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
