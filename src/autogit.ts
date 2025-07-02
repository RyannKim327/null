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
    private root: Node | null = null;

    insert(value: number): void {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: Node, newNode: Node): void {
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

    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: Node | null, value: number): boolean {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true; // value is equal to node.value
        }
    }

    delete(value: number): void {
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
            // Node to be deleted found
            if (node.left === null && node.right === null) {
                // Case 1: No children
                return null;
            } else if (node.left === null) {
                // Case 2: One child (right)
                return node.right;
            } else if (node.right === null) {
                // Case 2: One child (left)
                return node.left;
            }
            // Case 3: Two children
            const successor = this.findMin(node.right);
            node.value = successor.value;
            node.right = this.deleteNode(node.right, successor.value);
        }
        return node;
    }

    private findMin(node: Node): Node {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    inOrderTraversal(callback: (value: number) => void): void {
        this.inOrder(this.root, callback);
    }

    private inOrder(node: Node | null, callback: (value: number) => void): void {
        if (node !== null) {
            this.inOrder(node.left, callback);
            callback(node.value);
            this.inOrder(node.right, callback);
        }
    }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("In-order traversal:");
bst.inOrderTraversal(value => console.log(value)); // Outputs: 3, 5, 7, 10, 15

console.log("Search for 7:", bst.search(7)); // Outputs: true
console.log("Search for 20:", bst.search(20)); // Outputs: false

bst.delete(5);
console.log("In-order traversal after deleting 5:");
bst.inOrderTraversal(value => console.log(value)); // Outputs: 3, 7, 10, 15
