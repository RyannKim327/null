class Node {
    constructor(value, color) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color; // 'red' or 'black'
    }
}
class RedBlackTree {
    constructor() {
        this.root = null;
    }
    
    // Your implementation of insert, delete, rotateLeft, rotateRight, and other necessary methods goes here
}
insert(value) {
    const newNode = new Node(value, 'red');
    
    if (!this.root) {
        this.root = newNode;
    } else {
        let current = this.root;
        
        while (current) {
            if (value < current.value) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = newNode;
                    newNode.parent = current;
                    break;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = newNode;
                    newNode.parent = current;
                    break;
                }
            }
        }
        
        this.fixViolation(newNode);
    }
}
fixViolation(node) {
    while (node.parent && node.parent.color === 'red' && node.color === 'red') {
        const parent = node.parent;
        const grandparent = parent.parent;
        
        if (parent === grandparent.left) { // parent is the left child of the grandparent
            const uncle = grandparent.right;
            
            if (uncle && uncle.color === 'red') { // Case 1: Uncle is red
                parent.color = 'black';
                uncle.color = 'black';
                grandparent.color = 'red';
                node = grandparent;
            } else { // Case 2: Uncle is black or null
                if (node === parent.right) {
                    this.rotateLeft(parent);
                    node = parent;
                    parent = node.parent;
                }
                
                parent.color = 'black';
                grandparent.color = 'red';
                this.rotateRight(grandparent);
            }
        } else { // parent is the right child of the grandparent
            const uncle = grandparent.left;
            
            if (uncle && uncle.color === 'red') { // Case 1: Uncle is red
                parent.color = 'black';
                uncle.color = 'black';
                grandparent.color = 'red';
                node = grandparent;
            } else { // Case 2: Uncle is black or null
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
    
    this.root.color = 'black'; // Ensure root is always black
}
rotateLeft(node) {
    const right = node.right;
    node.right = right.left;
    
    if (right.left) {
        right.left.parent = node;
    }
    
    if (!node.parent) {
        this.root = right;
    } else if (node === node.parent.left) {
        node.parent.left = right;
    } else {
        node.parent.right = right;
    }
    
    right.left = node;
    right.parent = node.parent;
    node.parent = right;
}

rotateRight(node) {
    const left = node.left;
    node.left = left.right;
    
    if (left.right) {
        left.right.parent = node;
    }
    
    if (!node.parent) {
        this.root = left;
    } else if (node === node.parent.left) {
        node.parent.left = left;
    } else {
        node.parent.right = left;
    }
    
    left.right = node;
    left.parent = node.parent;
    node.parent = left;
}
