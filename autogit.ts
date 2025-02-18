class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: Node, newNode: Node) {
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

    search(value: number): Node | null {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: Node | null, value: number): Node | null {
        if (node === null || node.value === value) {
            return node;
        }
        return value < node.value ? this.searchNode(node.left, value) : this.searchNode(node.right, value);
    }

    delete(value: number) {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(node: Node | null, value: number): Node | null {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // Node deletion process
            if (node.left === null && node.right === null) {
                return null; // No children
            } 
            if (node.left === null) {
                return node.right; // One child (right)
            } 
            if (node.right === null) {
                return node.left; // One child (left)
            } 
            // Two children: Get the inorder successor (smallest in the right subtree)
            node.value = this.minValueNode(node.right).value;
            node.right = this.deleteNode(node.right, node.value);
        }
        return node;
    }

    private minValueNode(node: Node): Node {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // Additional methods like in-order traversal can be added here
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.search(10)); // Node { value: 10, left: null, right: null }
console.log(bst.search(7));  // null (not found)

bst.delete(10);
console.log(bst.search(10)); // null (deleted)
