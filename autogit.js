class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}
class AVLTree {
    constructor() {
        this.root = null;
    }
}
getHeight(node) {
    if (node === null) {
        return 0;
    }
    return node.height;
}
getBalance(node) {
    if (node === null) {
        return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
}
rotateRight(y) {
    let x = y.left;
    let T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
}
rotateLeft(x) {
    let y = x.right;
    let T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
}
insert(value) {
    this.root = this.insertNode(this.root, value);
}

insertNode(node, value) {
    if (node === null)
        return new Node(value);

    if (value < node.value)
        node.left = this.insertNode(node.left, value);
    else if (value > node.value)
        node.right = this.insertNode(node.right, value);
    else
        return node;

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    let balance = this.getBalance(node);

    if (balance > 1 && value < node.left.value)
        return this.rotateRight(node);

    if (balance < -1 && value > node.right.value)
        return this.rotateLeft(node);

    if (balance > 1 && value > node.left.value) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
    }

    if (balance < -1 && value < node.right.value) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
    }

    return node;
}
let avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
