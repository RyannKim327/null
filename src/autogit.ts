class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode, newNode: TreeNode): void {
        if (newNode.value < node.value) {
            // Go to the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // Go to the right subtree
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // In-order traversal (Left, Root, Right)
    inOrderTraversal(node: TreeNode | null): void {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Pre-order traversal (Root, Left, Right)
    preOrderTraversal(node: TreeNode | null): void {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Post-order traversal (Left, Right, Root)
    postOrderTraversal(node: TreeNode | null): void {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }
}
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

// Traverse the tree
console.log("In-order Traversal:");
tree.inOrderTraversal(tree.root);

console.log("Pre-order Traversal:");
tree.preOrderTraversal(tree.root);

console.log("Post-order Traversal:");
tree.postOrderTraversal(tree.root);
