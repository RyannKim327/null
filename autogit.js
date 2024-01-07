function AVLNode(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
}
function getHeight(node) {
    if (node === null)
        return 0;
    return node.height;
}
function updateHeight(node) {
    node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}
function rotateRight(node) {
    const newRoot = node.left;
    const temp = newRoot.right;

    newRoot.right = node;
    node.left = temp;

    updateHeight(node);
    updateHeight(newRoot);

    return newRoot;
}
function rotateLeft(node) {
    const newRoot = node.right;
    const temp = newRoot.left;

    newRoot.left = node;
    node.right = temp;

    updateHeight(node);
    updateHeight(newRoot);

    return newRoot;
}
function balance(node, key) {
    const balanceFactor = getHeight(node.left) - getHeight(node.right);

    if (balanceFactor > 1 && key < node.left.key) {
        // Left-left case
        return rotateRight(node);
    } else if (balanceFactor < -1 && key > node.right.key) {
        // Right-right case
        return rotateLeft(node);
    } else if (balanceFactor > 1 && key > node.left.key) {
        // Left-right case
        node.left = rotateLeft(node.left);
        return rotateRight(node);
    } else if (balanceFactor < -1 && key < node.right.key) {
        // Right-left case
        node.right = rotateRight(node.right);
        return rotateLeft(node);
    }

    return node;
}
function insertNode(root, key) {
    // Perform a normal BST insert
    if (root === null)
        return new AVLNode(key);

    if (key < root.key)
        root.left = insertNode(root.left, key);
    else if (key > root.key)
        root.right = insertNode(root.right, key);
    else  // Duplicate keys are not allowed
        return root;

    updateHeight(root);
    return balance(root, key);
}
function findMinNode(node) {
    let current = node;
    while (current.left !== null)
        current = current.left;
    return current;
}

function deleteNode(root, key) {
    if (root === null)
        return root;

    if (key < root.key)
        root.left = deleteNode(root.left, key);
    else if (key > root.key)
        root.right = deleteNode(root.right, key);
    else {
        // Node with only one child or no child
        if (root.left === null || root.right === null) {
            root = root.left || root.right;
        } else {
            // Node with two children, find the in-order successor
            const temp = findMinNode(root.right);
            root.key = temp.key;
            root.right = deleteNode(root.right, temp.key);
        }
    }

    if (root === null)
        return root;

    updateHeight(root);
    return balance(root, key);
}
let root = null;
root = insertNode(root, 10);
root = insertNode(root, 20);
root = deleteNode(root, 10);
