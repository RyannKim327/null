enum Color {
    Red,
    Black
}

class Node<T> {
    key: T;
    color: Color;
    left: Node<T> | null;
    right: Node<T> | null;
    parent: Node<T> | null;

    constructor(key: T, color: Color = Color.Red) {
        this.key = key;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class RedBlackTree<T> {
    root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert, delete, rotate, fix-up methods will go here
}
insert(key: T): void {
    const newNode = new Node(key);
    if (!this.root) {
        this.root = newNode;
        this.root.color = Color.Black;
        return;
    }

    let current = this.root;
    let parent: Node<T> | null = null;
    while (current) {
        parent = current;
        if (key < current.key) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    newNode.parent = parent;
    if (parent && key < parent.key) {
        parent.left = newNode;
    } else if (parent) {
        parent.right = newNode;
    }

    // Fixup the red-black properties:
    this.fixInsert(newNode);
}
private rotateLeft(node: Node<T>): void {
    const rightChild = node.right!;
    node.right = rightChild.left;
    if (rightChild.left) rightChild.left.parent = node;
    rightChild.parent = node.parent;

    if (!node.parent) {
        this.root = rightChild;
    } else if (node === node.parent.left) {
        node.parent.left = rightChild;
    } else {
        node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
}

private rotateRight(node: Node<T>): void {
    const leftChild = node.left!;
    node.left = leftChild.right;
    if (leftChild.right) leftChild.right.parent = node;
    leftChild.parent = node.parent;

    if (!node.parent) {
        this.root = leftChild;
    } else if (node === node.parent.right) {
        node.parent.right = leftChild;
    } else {
        node.parent.left = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
}
